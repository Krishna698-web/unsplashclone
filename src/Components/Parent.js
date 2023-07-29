import React, { useContext } from "react";
import SearchedPhotos from "./Photos/SearchedPhotos";
import RandomCollectoin from "./Photos/RandomPhotos";
import Header from "./Header";
import { PicsContext } from "../Context/PicsContext";

const Parent = () => {
  const { query } = useContext(PicsContext);

  return (
    <div className="flex flex-col justify-center w-full md:overflow-hidden sm:overflow-hidden">
      <Header />
      <div className="w-full flex justify-center bg-white">
        {query && query !== "" ? <SearchedPhotos /> : <RandomCollectoin />}
      </div>
    </div>
  );
};

export default Parent;
