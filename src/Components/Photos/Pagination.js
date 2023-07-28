import React, { useContext, useState } from "react";
import Photo from "../UI/Photo";
import { PicsContext } from "../../Context/PicsContext";

const pageArray = [1, 2, 3];
const Pagination = () => {
  const { pics, page, setPage } = useContext(PicsContext);
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
    <>
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
    </>
  );
};

export default Pagination;
