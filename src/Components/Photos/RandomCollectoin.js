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
    <div className="flex flex-wrap lg:w-1/2 justify-center items-center">
      {pics &&
        pics.map((pic) => (
          <Photo
            key={pic.id}
            src={pic.urls.small}
            alt={pic.alt_description}
            className={"m-1 rounded-sm drop-shadow-md"}
          />
        ))}
    </div>
  );
};

export default RandomCollectoin;
