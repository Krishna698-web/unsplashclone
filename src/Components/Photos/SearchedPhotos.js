import React, { useContext } from "react";
import Pagination from "./Pagination";
import PhotosCollection from "./PhotosCollection";
import OreintationModal from "../Modal/OreintationModal";
import { PicsContext } from "../../Context/PicsContext";
import PhotoModal from "../Modal/PhotoModal";

const SearchedPhotos = () => {
  const { showModal, setShowModal } = useContext(PicsContext);

  return (
    <div className="lg:w-3/5 md:w-11/12 p-5 flex justify-center flex-col">
      <OreintationModal />
      <PhotosCollection />
      {showModal && <PhotoModal onClose={() => setShowModal(false)} />}
      <Pagination />
    </div>
  );
};

export default SearchedPhotos;
