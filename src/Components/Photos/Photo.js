import React from "react";

const Photo = ({ src, alt, className }) => {
  return (
    <>
      <img src={src} alt={alt} className={className} />
    </>
  );
};

export default Photo;
