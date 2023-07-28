import React from "react";
import Modal from "../UI/Modal";
import Photo from "../UI/Photo";

const PhotoModal = ({ onClose, photo }) => {
  return (
    <Modal>
      <div
        className="absolute h-full w-full bg-slate-500 bg-opacity-20 backdrop-blur-sm"
        onClick={onClose}></div>
      <div className="flex flex-col justify-center items-center lg:w-1/2 md:w-4/6 py-10 bg-slate-100 rounded-md drop-shadow-2xl relative">
        <div className="lg:w-1/2 md:w-4/5 sm:w-11/12 flex flex-col items-center">
          <span
            onClick={onClose}
            className="cursor-pointer fixed right-3 top-0 text-gray-400 font-semibold hover:text-gray-900 p-1 text-lg">
            X
          </span>
          <Photo
            src={photo.urls.small}
            alt={photo.alt_description}
            className={"rounded-md h-full"}
          />
          <div className="w-10/12 flex justify-between items-center mt-4">
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
                // href={photo.links.download_location}
                href=""
                className="bg-blue-500 text-white px-2 py-2 rounded-sm"
                download>
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PhotoModal;
