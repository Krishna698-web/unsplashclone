import React, { useContext } from "react";
import SearchBar from "./searches/SearchBar";
import PhotosCollection from "./Photos/PhotosCollection";
import RandomCollectoin from "./Photos/RandomCollectoin";
import Header from "./Header";
import { PicsContext } from "../Context/PicsContext";
import KeywordModal from "./Modal/KeywordModal";

const Parent = () => {
  const { query } = useContext(PicsContext);

  return (
    <div className="flex flex-col justify-center w-full md:overflow-hidden sm:overflow-hidden">
      <Header />
      <div className="w-full flex justify-center bg-white">
        {query && query !== "" ? <PhotosCollection /> : <RandomCollectoin />}
      </div>
    </div>
  );
};

export default Parent;
