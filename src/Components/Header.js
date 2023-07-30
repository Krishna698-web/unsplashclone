import React, { useEffect, useState } from "react";
import SearchTool from "./searches/SearchTool";
import UnsplashAccess from "../Context/UnsplashAccess";

const Header = () => {
  const { unsplash } = UnsplashAccess();

  const [bgPhoto, setBgPhoto] = useState();

  const fetchPhoto = async () => {
    const photo = await unsplash.photos.getRandom({
      query: "mountains",
      orientation: "landscape",
    });

    setBgPhoto(photo.response.urls.regular);
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <header
      style={{
        backgroundImage: `url(${bgPhoto})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backdropFilter: "blur(220px)",
      }}
      className="w-full h-1/2 flex flex-col items-center bg-center mb-5 relative">
      <SearchTool />
    </header>
  );
};

export default Header;
