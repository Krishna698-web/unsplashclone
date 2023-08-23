import React from "react";

const Photo = ({ src, alt, className, onClick }) => {
  // const scrollHandler = () => {
  // };

  return (
    <div onClick={onClick} className="drop-shadow-lg">
      <img src={src} alt={alt} className={`${className} object-cover`} />
    </div>
  );
};

export default Photo;
