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
      style={{ backgroundImage: `url(${bgPhoto})`, height: "25rem" }}
      className={`w-full flex justify-center items-center bg-white bg-center`}>
      <SearchBar />
    </div>
  );
};

export default Header;
