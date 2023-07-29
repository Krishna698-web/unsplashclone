import React from "react";
import Modal from "../UI/Modal";
import Photo from "../UI/Photo";

const PhotoModal = ({ onClose, photo }) => {
  // console.log();

  const downloadLink = photo.links.download_location
    .replace("api.", "")
    .replace("download", "download?force=true");

  return (
    <Modal>
      <div
        className="absolute h-full w-full bg-slate-500 bg-opacity-20 backdrop-blur-sm"
        onClick={onClose}></div>
      <div className="flex flex-col justify-center items-center lg:w-4/5 md:w-4/5 h-5/6 bg-slate-100 rounded-md drop-shadow-2xl relative">
        <div className="lg:w-10/12 md:w-10/12 sm:w-11/12 flex flex-col items-center">
          <span
            onClick={onClose}
            className="cursor-pointer fixed right-3 top-0 text-gray-400 font-semibold hover:text-gray-900 p-1 text-lg">
            X
          </span>
          <div className="lg:w-2/5 md:w-5/5 sm:w-10/12 max-sm:w-10/12 flex justify-between items-center mb-4">
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
                // href=""
                className="bg-blue-600 hover: text-white px-3 py-2 rounded-sm">
                Download
              </a>
            </div>
          </div>
          <div className="">
            <Photo
              src={photo.urls.small}
              alt={photo.alt_description}
              className={
                "rounded-md lg:w-10/12 md:w-full sm:w-10/12 max-sm:w-10/12 m-auto"
              }
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PhotoModal;
