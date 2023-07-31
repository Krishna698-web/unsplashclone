import React, { useContext, useState } from "react";
import PhotosInColumns from "./PhotosInColumns";
import { PicsContext } from "../../Context/PicsContext";
import Photo from "../UI/Photo";

const PhotosCollection = () => {
  return (
    <>
      <div className="flex max-sm:flex-wrap gap-4">
        <PhotosInColumns from={0} to={10} />
        <PhotosInColumns from={10} to={20} />
        <PhotosInColumns from={20} to={30} />
      </div>
    </>
  );
};

export default PhotosCollection;
