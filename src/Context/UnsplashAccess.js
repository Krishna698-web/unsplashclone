import React from "react";
import { createApi } from "unsplash-js";

const UnsplashAccess = () => {
  const unsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_API_KEY,
  });
  return { unsplash };
};

export default UnsplashAccess;
