import React, { useCallback, useContext, useEffect } from "react";
import { PicsContext } from "../../Context/PicsContext";
import UnsplashAccess from "../../Context/UnsplashAccess";
import Pagination from "./Pagination";
import PhotoModal from "../Modal/PhotoModal";
import PhotosCollection from "./PhotosCollection";

const RandomPhotos = () => {
  const { setPics, page, showModal, setShowModal } = useContext(PicsContext);

  const { unsplash } = UnsplashAccess();

  const fetchPhotos = async () => {
    try {
      const randomPhotosRequest = await unsplash.photos.list({
        page: page,
        perPage: 30,
        orderBy: "latest",
      });

      if (randomPhotosRequest.response) {
        setPics(randomPhotosRequest.response.results);
        console.log(randomPhotosRequest.response.results);
      }
    } catch (error) {
      console.log(error.message);
      throw new Error();
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  return (
    <div className="lg:w-3/5 md:w-11/12 p-5 flex justify-center flex-col">
      <PhotosCollection />
      {showModal && <PhotoModal onClose={() => setShowModal(false)} />}
      <Pagination />
    </div>
  );
};

export default RandomPhotos;
