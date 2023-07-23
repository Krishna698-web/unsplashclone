import React, { useContext } from "react";
import SearchBar from "./searches/SearchBar";
import PhotosCollection from "./Photos/PhotosCollection";
import RandomCollectoin from "./Photos/RandomCollectoin";
import Header from "./Header";
import { PicsContext } from "../Context/PicsContext";

const Parent = () => {
  const { query } = useContext(PicsContext);

  return (
    <div className="flex flex-col justify-center w-full">
      <Header />
      {query ? <PhotosCollection /> : <RandomCollectoin />}
    </div>
  );
};

export default Parent;
