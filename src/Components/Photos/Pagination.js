import React, { useContext } from "react";
import { PicsContext } from "../../Context/PicsContext";

const Pagination = () => {
  const { pics, page, setPage } = useContext(PicsContext);

  const selectedPageHandler = (selectedPage) => {
    if (selectedPage >= 1) {
      setPage(selectedPage);
    }
  };

  // console.log([...Array(pics.length / 10).map((_, i) => i)]);
  return (
    <>
      <div className="my-4 w-full flex justify-center items-center gap-2">
        {page > 1 && (
          <span
            className="border p-2 cursor-pointer"
            onClick={() => selectedPageHandler(page - 1)}>
            ◀
          </span>
        )}
        {pics.length > 0 &&
          [...Array(pics.length / 10)].map((_, i) => (
            <span
              key={i}
              className={`border px-4 py-2 cursor-pointer font-semibold
              ${page === i + 1 ? "bg-blue-400 text-white" : "bg-white"}`}
              onClick={() => selectedPageHandler(i + 1)}>
              {i + 1}
            </span>
          ))}
        {page < pics.length / 10 && (
          <span
            className="border p-2 cursor-pointer"
            onClick={() => selectedPageHandler(page + 1)}>
            ▶
          </span>
        )}
      </div>
    </>
  );
};

export default Pagination;
