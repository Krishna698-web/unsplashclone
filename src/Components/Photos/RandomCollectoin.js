import React, { useContext, useEffect, useState } from "react";
import { PicsContext } from "../../Context/PicsContext";
import UnsplashAccess from "../../Context/UnsplashAccess";
import Photo from "./Photo";
import Pagination from "./Pagination";

const RandomCollectoin = () => {
  const { pics, setPics, page } = useContext(PicsContext);

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
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <>
      <Pagination />
    </>
  );
};

export default RandomCollectoin;
