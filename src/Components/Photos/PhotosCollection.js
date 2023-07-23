import React, { useContext } from "react";
import { PicsContext } from "../../Context/PicsContext";
import Photo from "./Photo";

const PhotosCollection = () => {
  const { pics } = useContext(PicsContext);
  return (
    <div className="flex flex-wrap lg:w-1/2">
      {pics &&
        pics.map((pic) => (
          <Photo
            key={pic.id}
            src={pic.urls.small}
            alt={pic.alt_description}
            className={"m-1"}
          />
        ))}
    </div>
  );
};

export default PhotosCollection;
