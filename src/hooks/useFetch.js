import React, { useContext } from "react";
import { PicsContext } from "../Context/PicsContext";
import UnsplashAccess from "../Context/UnsplashAccess";

const useFetch = () => {
  const { setPics } = useContext(PicsContext);
  const { unsplash } = UnsplashAccess();

  const fetchData = async (query) => {
    const request = await unsplash.search.getPhotos({
      query: query,
      page: 1,
      perPage: 30,
      count: 1,
    });

    if (request.response) {
      setPics(request.response.results);
    }
  };

  return {
    fetchData,
  };
};

export default useFetch;
