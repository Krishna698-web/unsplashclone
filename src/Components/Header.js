import React, { useEffect, useState } from "react";
import UnsplashAccess from "../Context/UnsplashAccess";
import SearchTool from "./searches/SearchTool";

const Header = () => {
  const { unsplash } = UnsplashAccess();
  const [bgPhoto, setBgPhoto] = useState();

  const fetchPhoto = async () => {
    const photo = await unsplash.photos.getRandom({
      query: "nature",
      orientation: "landscape",
    });

    // setBgPhoto(photo.response.urls.regular);
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <header
      style={{
        backgroundImage: `url(${bgPhoto})`,
        height: "30rem",
        backgroundRepeat: "no-repeat",
        width: "100vw",
      }}
      className="w-full flex flex-col justify-center items-center bg-white bg-center">
      <SearchTool />
    </header>
  );
};

export default Header;
