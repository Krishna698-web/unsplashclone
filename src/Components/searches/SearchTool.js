import React, { useState } from "react";
import SearchBar from "./SearchBar";
import KeywordModal from "../Modal/KeywordModal";

const SearchTool = () => {
  const [showKeywords, setShowKeywords] = useState(false);
  const ShowKeywordsHandler = () => {
    setShowKeywords(true);
  };

  return (
    <div className="w-full relative flex justify-center">
      <SearchBar onShowKeyword={ShowKeywordsHandler} />
      {showKeywords && <KeywordModal />}
    </div>
  );
};

export default SearchTool;
