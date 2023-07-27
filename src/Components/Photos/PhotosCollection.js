import React, { useContext } from "react";
import { PicsContext } from "../../Context/PicsContext";
import Photo from "./Photo";
import PaginatedCollection from "./PaginatedCollection";

const PhotosCollection = () => {
<<<<<<< HEAD
  const { pics, page } = useContext(PicsContext);

  return (
    <div className="w-4/5 flex justify-center flex-col">
      <div className="lg:w-full grid gap-1 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3">
        {pics &&
          pics
            .slice(page * 10 - 10, page * 10)
            .map((pic) => (
              <Photo
                key={pic.id}
                src={pic.urls.small}
                alt={pic.alt_description}
                className={
                  "rounded-md drop-shadow-md w-full h-fit object-cover"
                }
              />
            ))}
      </div>
      <Pagination />
    </div>
=======
  return (
    <>
      <PaginatedCollection />
    </>
>>>>>>> parent of b4a51d1 (Added seperate pagination)
  );
};

export default PhotosCollection;
