import React from "react";
import SearchBar from "./searches/SearchBar";
import PhotosCollection from "./Photos/PhotosCollection";
import RandomCollectoin from "./Photos/RandomCollectoin";
import Header from "./Header";

const Parent = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <Header />
      <PhotosCollection />
      <RandomCollectoin />
    </div>
  );
};

export default Parent;
