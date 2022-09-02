import Head from "next/head";
import React from "react";
import SearchHeader from "../components/SearchHeader";
import Response from "../Response";

const search = ({ results }) => {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>

      {/* search header */}
      <SearchHeader />

      {/* search results */}
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
