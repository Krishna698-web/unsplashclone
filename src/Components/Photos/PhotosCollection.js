import React, { useContext, useState } from "react";
import Photo from "../UI/Photo";
import { PicsContext } from "../../Context/PicsContext";
import PhotoModal from "../Modal/PhotoModal";

const PhotosCollection = ({ passPhotoHandler }) => {
  const { pics } = useContext(PicsContext);

  return (
    <>
      <div className="lg:w-full grid gap-2 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3">
        {pics &&
          pics.map((pic) => (
            <Photo
              key={pic.id}
              src={pic.urls.small}
              alt={pic.alt_description}
              className={"rounded-md cursor-zoom-in"}
              onClick={() => passPhotoHandler(pic)}
            />
          ))}
      </div>
    </>
  );
};

export default PhotosCollection;
