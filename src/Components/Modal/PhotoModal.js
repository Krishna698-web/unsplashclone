import React, { useContext, useEffect } from "react";
import Modal from "../UI/Modal";
import Photo from "../UI/Photo";
import useFetch from "../../hooks/useFetch";
import { PicsContext } from "../../Context/PicsContext";
import RelatedPhotos from "../Photos/RelatedPhotos";

const PhotoModal = ({ onClose }) => {
  const { query, photo } = useContext(PicsContext);
  const { fetchData } = useFetch();

  const downloadLink = photo.links.download_location
    .replace("api.", "")
    .replace("download", "download?force=true");

  useEffect(() => {
    fetchData(query);
  }, []);

  return (
    <Modal>
      <div
        className="absolute h-full w-full bg-slate-500 bg-opacity-20 backdrop-blur-sm transition-all"
        onClick={onClose}></div>
      <div className="flex flex-col justify-center items-center lg:w-4/5 md:w-4/5 max-sm:w-11/12 h-5/6 pt-10 pb-5 bg-slate-100 rounded-md drop-shadow-2xl relative">
        <div className="lg:w-10/12 md:w-10/12 sm:w-11/12 max-sm:w-11/12 flex flex-col items-center overflow-y-auto no-scrollbar">
          <span
            onClick={onClose}
            className="cursor-pointer fixed right-3 top-0 text-gray-400 font-semibold hover:text-gray-900 p-1 text-lg">
            X
          </span>
          <div className="">
            <Photo
              src={photo.urls.small}
              alt={photo.alt_description}
              className={
                "rounded-md lg:w-10/12 md:w-full sm:w-10/12 max-sm:w-10/12 m-auto"
              }
            />
          </div>
          <div className="lg:w-2/5 md:w-5/5 sm:w-10/12 max-sm:w-10/12 flex justify-between items-center mt-4">
            <div className="flex items-center gap-2">
              <Photo
                src={photo.user.profile_image.small}
                alt={"Profile image"}
                className={"rounded-full h-10"}
              />
              <p>{photo.user.username}</p>
            </div>
            <div>
              <a
                download
                href={downloadLink}
                className="bg-blue-600 text-white px-3 py-2 rounded-sm drop-shadow-md">
                Download
              </a>
            </div>
          </div>
          <RelatedPhotos />
        </div>
      </div>
    </Modal>
  );
};

export default PhotoModal;
