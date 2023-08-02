import { useContext } from "react";
import { PicsContext } from "../Context/PicsContext";
import UnsplashAccess from "../Context/UnsplashAccess";

const useFetch = () => {
  const { setPics, page } = useContext(PicsContext);
  const { unsplash } = UnsplashAccess();

  const fetchData = async (query, shape = null) => {
    try {
      const request = await unsplash.search.getPhotos({
        query: query,
        page: page,
        perPage: 30,
        count: 1,
        orientation: shape,
      });

      if (request.response) {
        setPics(request.response.results);
      }
    } catch (error) {
      console.log(error.message);
      throw new Error();
    }
  };

  return {
    fetchData,
  };
};

export default useFetch;
