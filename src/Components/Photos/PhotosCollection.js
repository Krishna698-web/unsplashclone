import React, { useContext } from "react";
import { PicsContext } from "../../Context/PicsContext";
import Photo from "./Photo";

const PhotosCollection = () => {
  const { pics } = useContext(PicsContext);
  return (
    <div>
      {pics &&
        pics.map((pic) => (
          <Photo key={pic.id} src={pic.urls.small} alt={pic.alt_description} />
        ))}
    </div>
  );
};

export default PhotosCollection;
