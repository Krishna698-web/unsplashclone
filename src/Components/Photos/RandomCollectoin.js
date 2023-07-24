import React, { useContext, useEffect, useState } from "react";
import { PicsContext } from "../../Context/PicsContext";
import UnsplashAccess from "../../Context/UnsplashAccess";
import Photo from "./Photo";

const RandomCollectoin = () => {
  const [page, setPage] = useState(1);

  const { pics, setPics } = useContext(PicsContext);

  const { unsplash } = UnsplashAccess();

  const fetchPhotos = async () => {
    const randomPhotosRequest = await unsplash.photos.list({
      page: 1,
      perPage: 30,
      orderBy: "latest",
    });

    // console.log(randomPhotosRequest);
    if (randomPhotosRequest && randomPhotosRequest.response) {
      setPics(randomPhotosRequest.response.results);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const selectedPageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  const perviousPageHandler = () => {
    if (page >= 1) {
      setPage(page - 1);
    }
  };
  const nextPageHandler = () => {
    if (page >= 1) {
      setPage(page + 1);
    }
  };

  return (
    <div className="w-4/5 flex justify-center flex-col">
      <div className="lg:w-full grid gap-1 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3">
        {pics &&
          pics
            .slice(page * 10 - 10, page * 10)
            .map((pic) => (
              <Photo
                key={pic.id}
                src={pic.urls.small}
                alt={pic.alt_description}
                className={
                  "rounded-md drop-shadow-md w-full h-fit object-cover"
                }
              />
            ))}
      </div>
      <div className="my-4 w-full flex justify-center items-center gap-2">
        {page > 1 && (
          <span
            className="border p-2 cursor-pointer"
            onClick={perviousPageHandler}>
            ◀
          </span>
        )}
        {pics.length > 0 &&
          [...Array(pics.length / 10)].map((_, i) => (
            <span
              // className={}
              className={
                "border px-4 py-2 cursor-pointer font-semibold" +
                (page === i ? "bg-blue-400" : "bg-white")
              }
              onClick={() => selectedPageHandler(i + 1)}>
              {i + 1}
            </span>
          ))}
        {page < pics.length / 10 && (
          <span className="border p-2 cursor-pointer" onClick={nextPageHandler}>
            ▶
          </span>
        )}
      </div>
    </div>
  );
};

export default RandomCollectoin;
