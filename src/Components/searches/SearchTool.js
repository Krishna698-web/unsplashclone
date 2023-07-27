import React, { useState } from "react";
import SearchBar from "./SearchBar";
import KeywordModal from "../Modal/KeywordModal";

const SearchTool = () => {
  const [showKeywords, setShowKeywords] = useState(false);

  return (
    <div className="w-full relative flex justify-center">
      <SearchBar onShowKeyword={setShowKeywords} />
      {showKeywords && <KeywordModal />}
    </div>
  );
};

export default SearchTool;
