import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (event) => {
    event.preventDefault();
    const term = searchInputRef.current.value.trim();
    if (!term) return;
    router.push(`/search?term=${term}&searchType=`);
  };

  const randomSearch = async (event) => {
    event.preventDefault();
    const randomTerm = await fetch(
      "https://random-word-api.herokuapp.com/word"
    ).then((res) => res.json());
    if (!randomTerm) return;
    router.push(`/search?term=${randomTerm}&searchType=`);
  };

  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <form className="flex flex-col items-center mt-40">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2880px-Google_2015_logo.svg.png"
          width="300"
          height="100"
          objectFit="cover" // prevent stretching
        />
        <div
          className="flex w-full 
            items-center 
            mt-5 mx-auto max-w-[90%] 
            border border-gray-200 hover:shadow-lg
            focus-within:shadow-lg
            px-5 py-3
            rounded-full
            sm:max-w-xl
            lg:max-w-3xl
            "
        >
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none "
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div
          className="flex flex-col sm:flex-row 2-[50%] 
            space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center"
        >
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn" onClick={randomSearch}>
            I&apos;m feeling lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
