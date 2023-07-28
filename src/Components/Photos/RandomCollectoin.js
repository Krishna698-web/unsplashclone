import React, { useCallback, useContext, useEffect, useState } from "react";
import { PicsContext } from "../../Context/PicsContext";
import UnsplashAccess from "../../Context/UnsplashAccess";
import Photo from "../UI/Photo";
import Pagination from "./Pagination";
import PhotoModal from "../Modal/PhotoModal";

const RandomCollectoin = () => {
  const { pics, setPics, page, showModal, setShowModal } =
    useContext(PicsContext);

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
      <div className="lg:w-full grid gap-1 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3">
        {pics &&
          pics.map((pic) => (
            <Photo
              key={pic.id}
              src={pic.urls.small}
              alt={pic.alt_description}
              className={
                "rounded-md drop-shadow-md w-full h-fit object-cover cursor-pointer"
              }
              onClick={() => passPhotoHandler(pic)}
            />
          ))}
      </div>
      {showModal && (
        <PhotoModal onClose={() => setShowModal(!showModal)} photo={photo} />
      )}
      <Pagination />
    </div>
  );
};

export default RandomCollectoin;
