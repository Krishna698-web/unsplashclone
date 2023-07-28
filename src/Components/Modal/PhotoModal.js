import React from "react";
import Modal from "../UI/Modal";
import Photo from "../UI/Photo";

const PhotoModal = ({ onClose, photo }) => {
  console.log(photo);
  console.log(photo.user.username);
  console.log(photo.user.profile_image.small);
  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col justify-center items-center lg:w-1/2 md:w-4/6 py-4 bg-white rounded-md drop-shadow-2xl">
        <div className="lg:w-1/2 md:w-4/5">
          <span
            onClick={onClose}
            className="cursor-pointer fixed right-1 -top-2 text-gray-300 hover:text-gray-900 p-1 text-lg">
            X
          </span>
          <Photo
            src={photo.urls.small}
            alt={photo.alt_description}
            className={"rounded-md drop-shadow-md w-full h-fit object-cover"}
          />
          <div className="w-full flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <Photo
                src={photo.user.profile_image.small}
                alt={"Profile image"}
                className={"rounded-full"}
              />
              <p>{photo.user.username}</p>
            </div>
            <div>
              <a
                href="#"
                className="bg-blue-500 text-white px-2 py-2 rounded-sm">
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
