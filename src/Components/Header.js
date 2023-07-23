import React, { useEffect, useState } from "react";
import SearchBar from "./searches/SearchBar";
import UnsplashAccess from "../Context/UnsplashAccess";
import KeywordModal from "./Modal/KeywordModal";

const Header = () => {
  const { unsplash } = UnsplashAccess();
  const [bgPhoto, setBgPhoto] = useState();

  const [showKeywords, setShowKeywords] = useState(false);

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

  const ShowKeywordsHandler = () => {
    setShowKeywords(true);
  };

  return (
    <header
      style={{
        backgroundImage: `url(${bgPhoto})`,
        height: "30rem",
        backgroundRepeat: "no-repeat",
        width: "100vw",
      }}
      className="w-full flex flex-col justify-center items-center bg-white bg-center">
      <SearchBar onShowKeyword={ShowKeywordsHandler} />
      {showKeywords && <KeywordModal />}
    </header>
  );
};

export default Header;
