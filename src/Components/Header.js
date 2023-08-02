import React, { useCallback, useEffect, useState } from "react";
import SearchTool from "./searches/SearchTool";
import UnsplashAccess from "../Context/UnsplashAccess";

const Header = () => {
  const { unsplash } = UnsplashAccess();

  const [bgPhoto, setBgPhoto] = useState();

  const fetchPhoto = useCallback(async () => {
    try {
      const photo = await unsplash.photos.getRandom({
        query: "mountains",
        orientation: "landscape",
      });
      if (photo.response) {
        setBgPhoto(photo.response.urls.regular);
        // console.log(photo.response.urls.regular);
      }
    } catch (error) {
      console.log(error.message);
      throw new Error();
    }
  }, []);

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
      }}
      className="w-full lg:h-3/5 md:h-3/5 sm:h-1/2 max-sm:h-1/2 flex flex-col items-center bg-center mb-5 relative">
      <SearchTool />
    </header>
  );
};

export default Header;
