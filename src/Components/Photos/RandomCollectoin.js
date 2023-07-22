import React, { useContext, useEffect } from "react";
import { PicsContext } from "../../Context/PicsContext";
import UnsplashAccess from "../../Context/UnsplashAccess";
import Photo from "./Photo";

const RandomCollectoin = () => {
  const { pics, setPics } = useContext(PicsContext);

  const { unsplash } = UnsplashAccess();

  const fetchPhotos = async () => {
    const randomPhotosRequest = await unsplash.photos.list({
      page: 1,
      perPage: 10,
      orderBy: "latest",
    });

    // console.log(randomPhotosRequest.response.results);
    setPics(randomPhotosRequest.response.results);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      {pics &&
        pics.map((pic) => (
          <Photo key={pic.id} src={pic.urls.small} alt={pic.alt_description} />
        ))}
    </div>
  );
};

export default RandomCollectoin;
