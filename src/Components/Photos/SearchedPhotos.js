import React, { useContext, useState } from "react";
import { PicsContext } from "../../Context/PicsContext";
import Photo from "../UI/Photo";
import Pagination from "./Pagination";
import PhotosCollection from "./PhotosCollection";

const SearchedPhotos = () => {
  const { pics, page } = useContext(PicsContext);

  return (
    <div className="w-4/5 flex justify-center flex-col">
      <PhotosCollection />
      <Pagination />
    </div>
  );
};

export default SearchedPhotos;
