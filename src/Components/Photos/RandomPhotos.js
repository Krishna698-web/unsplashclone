import React, { useContext, useEffect, useState } from "react";
import { PicsContext } from "../../Context/PicsContext";
import UnsplashAccess from "../../Context/UnsplashAccess";
import Pagination from "./Pagination";
import PhotoModal from "../Modal/PhotoModal";
import PhotosCollection from "./PhotosCollection";

const RandomCollectoin = () => {
  const { setPics, page, showModal, setShowModal } = useContext(PicsContext);

  const { unsplash } = UnsplashAccess();

  const fetchPhotos = async () => {
    const randomPhotosRequest = await unsplash.photos.list({
      page: 1,
      perPage: 30,
      orderBy: "latest",
    });

    // console.log(randomPhotosRequest);
    if (randomPhotosRequest && randomPhotosRequest.response) {
      setPics(randomPhotosRequest.response.results);
      // console.log(randomPhotosRequest.response.results);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  return (
    <div className="lg:w-3/5 p-5 flex justify-center flex-col">
      <PhotosCollection />
      {showModal && <PhotoModal onClose={() => setShowModal(false)} />}
      <Pagination />
    </div>
  );
};

export default RandomCollectoin;
