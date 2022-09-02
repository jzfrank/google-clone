import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import ImageResults from "../components/ImageResults";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import Response from "../Response";
import ResponseImages from "../ResponseImages";

const search = ({ results }) => {
  console.log(results);
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Page</title>
      </Head>

      {/* search header */}
      <SearchHeader />

      {/* search web and Images results */}
      {router.query.searchType === "image" ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  // have a mock data while styling, otherwise you
  // will easily use up the quota of API
  const startIndex = context.query.start || "1";
  const mockData = true;
  const data = mockData
    ? context.query.searchType === "image"
      ? ResponseImages
      : Response
    : await fetch(`https://www.googleapis.com/customsearch/v1?key=${
        process.env.API_KEY
      }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}
    ${context.query.searchType && "&searchType=image"}&start=${startIndex}
  `).then((response) => response.json());
  return {
    props: {
      results: data,
    },
  };
}

export default search;
