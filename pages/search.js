import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import Response from "../Response";

const search = ({ results }) => {
  console.log(results);
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term}</title>
      </Head>

      {/* search header */}
      <SearchHeader />

      {/* search results */}
      <SearchResults results={results} />
    </div>
  );
};

export async function getServerSideProps(context) {
  // have a mock data while styling, otherwise you
  // will easily use up the quota of API
  const mockData = true;
  const data = mockData
    ? Response
    : await fetch(`https://www.googleapis.com/customsearch/v1?key=${
        process.env.API_KEY
      }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}
    ${context.query.searchType && "&searchType=image"}
  `).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}

export default search;
