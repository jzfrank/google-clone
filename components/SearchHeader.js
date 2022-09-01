import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { SearchIcon, MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import User from "./User";

const SearchHeader = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (event) => {
    console.log("....,", router.query.term);
    event.preventDefault();
    const term = searchInputRef.current.value.trim();
    searchInputRef.current.value = term;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          className="hover:cursor-pointer"
          onClick={() => router.push("/")}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2880px-Google_2015_logo.svg.png"
          width="120"
          height="40"
          objectFit="contain" // prevent stretching
        />

        <form
          className="flex border
         border-gray-200 rounded-full shadow-lg 
           px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl
           items-center"
        >
          <input
            type="text"
            defaultValue={router.query.term.trim()}
            ref={searchInputRef}
            className="w-full focus:outline-none"
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 text-gray-500 hover:cursor-pointer sm:mr-3"
          />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500 " />
          <button onClick={search} type="submit" hidden></button>
        </form>

        <User className="ml-auto whitespace-nowrap" />
      </div>
    </header>
  );
};

export default SearchHeader;
