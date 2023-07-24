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
      perPage: 20,
      orderBy: "latest",
    });

    // console.log(randomPhotosRequest.response.results);
    setPics(randomPhotosRequest.response.results);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div className="lg:w-4/5 grid gap-1 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3">
      {pics &&
        pics.map((pic) => (
          <Photo
            key={pic.id}
            src={pic.urls.small}
            alt={pic.alt_description}
            className={"rounded-md drop-shadow-md  w-full h-fit object-cover"}
          />
        ))}
    </div>
  );
};

export default RandomCollectoin;
