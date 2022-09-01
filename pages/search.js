import Head from "next/head";
import React from "react";
import SearchHeader from "../components/SearchHeader";

const search = () => {
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

export default search;
