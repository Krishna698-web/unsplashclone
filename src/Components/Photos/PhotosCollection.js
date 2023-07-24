import React, { useContext } from "react";
import { PicsContext } from "../../Context/PicsContext";
import Photo from "./Photo";
import PaginatedCollection from "./PaginatedCollection";

const PhotosCollection = () => {
  return (
    <>
      <PaginatedCollection />
    </>
  );
};

export default PhotosCollection;
