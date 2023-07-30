import React from "react";
import PhotosCollection from "./PhotosCollection";

const RelatedPhotos = () => {
  return (
    <div className="mt-10 px-2">
      <h1 className="font-semibold text-2xl mb-3">Related Images:</h1>
      <PhotosCollection />
    </div>
  );
};

export default RelatedPhotos;
