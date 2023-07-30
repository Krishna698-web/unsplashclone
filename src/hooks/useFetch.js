import React, { useCallback, useContext } from "react";
import { PicsContext } from "../Context/PicsContext";
import UnsplashAccess from "../Context/UnsplashAccess";

const useFetch = () => {
  const { setPics } = useContext(PicsContext);
  const { unsplash } = UnsplashAccess();

  const fetchData = useCallback(async (query, shape = null) => {
    const request = await unsplash.search.getPhotos({
      query: query,
      page: 1,
      perPage: 30,
      count: 1,
      orientation: shape,
    });

    if (request.response) {
      setPics(request.response.results);
    }
  });

  return {
    fetchData,
  };
};

export default useFetch;
