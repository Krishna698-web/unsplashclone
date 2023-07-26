import React from "react";

const Photo = ({ src, alt, className }) => {
  return (
    <div className="">
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-pointer transition-all`}
      />
    </div>
  );
};

export default Photo;
