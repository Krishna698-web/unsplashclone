import React, { useCallback, useContext, useEffect, useState } from "react";
import { PicsContext } from "../../Context/PicsContext";
import UnsplashAccess from "../../Context/UnsplashAccess";
import Photo from "../UI/Photo";
import Pagination from "./Pagination";
import PhotoModal from "../Modal/PhotoModal";
import PhotosCollection from "./PhotosCollection";

const RandomCollectoin = () => {
  const { setPics, page, showModal, setShowModal } = useContext(PicsContext);

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

  const [photo, setPhoto] = useState();

  const passPhotoHandler = (pic) => {
    setShowModal(true);
    setPhoto(pic);
  };

  return (
    <div className="w-4/5 flex justify-center flex-col">
      <PhotosCollection passPhotoHandler={passPhotoHandler} />
      {showModal && (
        <PhotoModal onClose={() => setShowModal(false)} photo={photo} />
      )}
      <Pagination />
    </div>
  );
};

export default RandomCollectoin;
