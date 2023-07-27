import React, { useContext, useState } from "react";
import Photo from "./Photo";
import { PicsContext } from "../../Context/PicsContext";

<<<<<<< HEAD:src/Components/Photos/Pagination.js
const pageArray = [1, 2, 3];
const Pagination = () => {
  const { pics, page, setPage } = useContext(PicsContext);
=======
const PaginatedCollection = () => {
  const { pics } = useContext(PicsContext);
  const [page, setPage] = useState(1);
>>>>>>> parent of b4a51d1 (Added seperate pagination):src/Components/Photos/PaginatedCollection.js

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
          pageArray.map((i) => (
            <span
              key={i}
              className={`border px-4 py-2 cursor-pointer font-semibold
                ${page === i ? "bg-blue-400 text-white" : "bg-white"}`}
              onClick={() => selectedPageHandler(i)}>
              {i}
            </span>
          ))}
        {page < pageArray[2] && (
          <span className="border p-2 cursor-pointer" onClick={nextPageHandler}>
            ▶
          </span>
        )}
      </div>
    </div>
  );
};

export default PaginatedCollection;
