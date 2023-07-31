import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const SearchTool = () => {
  return (
    <div className="w-full h-full relative flex flex-col lg:pt-40 md:pt-40 sm:pt-24  max-sm:pt-24 items-center bg-pink-300 bg-opacity-10 ">
      <div className="lg:w-1/2 md:w-3/4 sm:w-4/5 max-sm:w-4/5 mb-1 text-white relative z-10">
        <h1 className="font-bold text-4xl mb-2 drop-shadow-3xl">Splashiify</h1>
        <p className="text-xl max-sm:text-lg">
          Find your Image in a splashiest way..
        </p>
        <p className="text-xl max-sm:text-lg">
          The more you think, the more your explore..
        </p>
      </div>
      <SearchBar />
    </div>
  );
};

export default SearchTool;
