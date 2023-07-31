import React, { useContext, useState } from "react";
import PhotosInColumns from "./PhotosInColumns";

const PhotosCollection = () => {
  return (
    <>
      <div className="lg:w-full md:w-full gap-4 flex sm:flex-wrap max-sm:flex-wrap p-4">
        <PhotosInColumns start={0} end={10} />
        <PhotosInColumns start={10} end={20} />
        <PhotosInColumns start={20} end={30} />
      </div>
    </>
  );
};

export default PhotosCollection;
