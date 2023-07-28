import React from "react";

const Photo = ({ src, alt, className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={src} alt={alt} className={`${className}`} />
    </div>
  );
};

export default Photo;
