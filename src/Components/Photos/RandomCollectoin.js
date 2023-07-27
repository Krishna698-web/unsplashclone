import React, { useCallback, useContext, useEffect, useState } from "react";
import { PicsContext } from "../../Context/PicsContext";
import UnsplashAccess from "../../Context/UnsplashAccess";
import Photo from "./Photo";
import PaginatedCollection from "./PaginatedCollection";

const RandomCollectoin = () => {
  const { pics, setPics } = useContext(PicsContext);

  const { unsplash } = UnsplashAccess();

  const fetchPhotos = async () => {
    const randomPhotosRequest = await unsplash.photos.list({
      perPage: 30,
      orderBy: "latest",
    });

    // console.log(randomPhotosRequest);
    if (randomPhotosRequest && randomPhotosRequest.response) {
      setPics(randomPhotosRequest.response.results);
      console.log(randomPhotosRequest.response.results);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  return (
<<<<<<< HEAD
    <div className="w-4/5 flex justify-center flex-col">
      <div className="lg:w-full grid gap-1 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3">
        {pics &&
          pics.map((pic) => (
            <Photo
              key={pic.id}
              src={pic.urls.small}
              alt={pic.alt_description}
              className={"rounded-md drop-shadow-md w-full h-fit object-cover"}
            />
          ))}
      </div>
      <Pagination />
    </div>
=======
    <>
      <PaginatedCollection />
    </>
>>>>>>> parent of b4a51d1 (Added seperate pagination)
  );
};

export default RandomCollectoin;
