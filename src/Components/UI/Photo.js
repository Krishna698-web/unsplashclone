import React from "react";

const Photo = ({ src, alt, className, onClick }) => {
  return (
    <div onClick={onClick}>
      <img
        src={src}
        alt={alt}
        className={`${className} drop-shadow-lg object-cover`}
      />
    </div>
  );
};

export default Photo;
