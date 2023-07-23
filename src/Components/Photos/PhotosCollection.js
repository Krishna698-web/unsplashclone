import React, { useContext } from "react";
import { PicsContext } from "../../Context/PicsContext";
import Photo from "./Photo";

const PhotosCollection = () => {
  const { pics } = useContext(PicsContext);
  return (
    <div className="lg:w-4/5 grid gap-1 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 bg-slate-400 ">
      {pics &&
        pics.map((pic) => (
          <Photo
            key={pic.id}
            src={pic.urls.small}
            alt={pic.alt_description}
            className={"rounded-sm drop-shadow-md  w-full h-fit object-cover"}
          />
        ))}
    </div>
  );
};

export default PhotosCollection;
