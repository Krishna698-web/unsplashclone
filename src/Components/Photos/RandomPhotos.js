import React, { useCallback, useContext, useEffect, useState } from "react";
import { PicsContext } from "../../Context/PicsContext";
import UnsplashAccess from "../../Context/UnsplashAccess";
import Photo from "../UI/Photo";
import Pagination from "./Pagination";
import PhotoModal from "../Modal/PhotoModal";
import PhotosCollection from "./PhotosCollection";

const RandomCollectoin = () => {
  const { setPics, page } = useContext(PicsContext);

  const { unsplash } = UnsplashAccess();

  const fetchPhotos = async () => {
    const randomPhotosRequest = await unsplash.photos.list({
      page: page,
      perPage: 20,
      orderBy: "latest",
    });

    // console.log(randomPhotosRequest);
    if (randomPhotosRequest && randomPhotosRequest.response) {
      setPics(randomPhotosRequest.response.results);
      console.log(randomPhotosRequest.response);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  return (
    <div className="w-4/5 flex justify-center flex-col">
      <PhotosCollection />
      <Pagination />
    </div>
  );
};

export default RandomCollectoin;
