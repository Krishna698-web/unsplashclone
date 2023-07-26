import React, { useState } from "react";
import SearchBar from "./SearchBar";
import KeywordModal from "../Modal/KeywordModal";

const SearchTool = () => {
  const [showKeywords, setShowKeywords] = useState(false);

  return (
    <div className="w-full relative flex flex-col justify-center items-center">
      <div className="lg:w-1/2 md:w-4/5 mb-1 lg:mr-8 md:ml-2">
        <h1 className="font-bold text-4xl">Splashy</h1>
        <p className="">Find your Image in a splashiest way..</p>
        <p className="">The more you think, the more your explore..</p>
      </div>
      <SearchBar onShowKeyword={setShowKeywords} />
      {showKeywords && <KeywordModal />}
    </div>
  );
};

export default SearchTool;
