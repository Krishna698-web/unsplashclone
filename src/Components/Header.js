import React, { useEffect, useState } from "react";
import SearchBar from "./searches/SearchBar";
import UnsplashAccess from "../Context/UnsplashAccess";
import Photo from "./Photos/Photo";

const Header = () => {
  const { unsplash } = UnsplashAccess();
  const [bgPhoto, setBgPhoto] = useState();

  const fetchPhoto = async () => {
    const photo = await unsplash.photos.getRandom({
      query: "nature",
      orientation: "landscape",
    });

    // console.log(photo.response.urls.small);
    setBgPhoto(photo.response.urls.regular);
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <div
      className={`w-full lg:h-1/4 md:h-4/5 sm:h-1/2 flex justify-center items-center bg-white`}>
      <Photo
        src={bgPhoto}
        className="w-full absolute bg-center md:h-4/5 sm:h-1/2"
      />
      <SearchBar />
    </div>
  );
};

export default Header;
