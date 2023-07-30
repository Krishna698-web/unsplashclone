import React from "react";
import Pagination from "./Pagination";
import PhotosCollection from "./PhotosCollection";
import OreintationModal from "../Modal/OreintationModal";

const SearchedPhotos = () => {
  return (
    <div className="w-4/5 flex justify-center flex-col">
      <OreintationModal />
      <PhotosCollection />
      <Pagination />
    </div>
  );
};

export default SearchedPhotos;
