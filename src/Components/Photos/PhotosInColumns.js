import React, { useContext } from "react";
import { PicsContext } from "../../Context/PicsContext";
import Photo from "../UI/Photo";

const PhotosInColumns = ({ start, end }) => {
  const { pics, setShowModal, setPhoto } = useContext(PicsContext);

  const passPhotoHandler = (pic) => {
    setShowModal(true);
    setPhoto(pic);
  };

  return (
    <div className="lg:w-1/3 md:w-1/3 sm:w-full max-sm:w-full flex flex-col gap-4">
      {pics &&
        pics
          .slice(start, end)
          .map((pic) => (
            <Photo
              key={pic.id}
              src={pic.urls.regular}
              alt={pic.alt_description}
              className={"rounded-md cursor-zoom-in"}
              onClick={() => passPhotoHandler(pic)}
            />
          ))}
    </div>
  );
};

export default PhotosInColumns;
