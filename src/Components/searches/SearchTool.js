import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const SearchTool = () => {
  return (
    <div className="w-full h-full relative flex flex-col lg:pt-40 md:pt-32 max-sm:pt-16 items-center bg-pink-300 bg-opacity-10 ">
      <div className="lg:w-1/2 md:w-4/5 sm:w-4/5 max-sm:w-5/6 mb-1 lg:mr-10 text-white relative z-10">
        <h1 className="font-bold text-4xl mb-2 drop-shadow-3xl">Splashiify</h1>
        <p className="text-xl">Find your Image in a splashiest way..</p>
        <p className="text-xl">The more you think, the more your explore..</p>
      </div>
      <SearchBar />
    </div>
  );
};

export default SearchTool;
