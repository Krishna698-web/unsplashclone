import React, { useContext, useState } from "react";
import Photo from "./Photo";
import { PicsContext } from "../../Context/PicsContext";

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
          [...Array(pics.length / 10)].map((_, i) => (
            <span
              key={i}
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
    </>
  );
};

export default Pagination;
