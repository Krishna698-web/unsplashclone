import React, { useContext, useState } from "react";
import { IoTabletPortraitSharp, IoTabletLandscapeSharp } from "react-icons/io5";
import { BiCategory, BiSquare } from "react-icons/bi";

import { PicsContext } from "../../Context/PicsContext";
import useFetch from "../../hooks/useFetch";

const OreintationModal = () => {
  const { query } = useContext(PicsContext);
  const { fetchData } = useFetch();

  return (
    <div className="mb-5">
      <h2 className="font-semibold text-2xl mb-2">Orientation:</h2>
      <div className="flex flex-wrap w-full gap-5">
        <button
          className="flex gap-1 items-center border py-2 px-5 rounded-md text-gray-400 hover:text-gray-800 hover:drop-shadow-md hover:border-slate-800"
          onClick={() => fetchData(query, null)}>
          <BiCategory />
          <span>All</span>
        </button>
        <button
          className="flex gap-1 items-center border py-2 px-5 rounded-md text-gray-400 hover:text-gray-800 hover:drop-shadow-md hover:border-slate-800"
          onClick={() => fetchData(query, "landscape")}>
          <IoTabletLandscapeSharp />
          <span>Landscape</span>
        </button>
        <button
          className="flex gap-1 items-center border py-2 px-5 rounded-md text-gray-400 hover:text-gray-800 hover:drop-shadow-md hover:border-slate-800"
          onClick={() => fetchData(query, "squarish")}>
          <BiSquare />
          <span>Square</span>
        </button>
        <button
          className="flex gap-1  items-center  border py-2 px-5 rounded-md text-gray-400 hover:text-gray-800 hover:drop-shadow-md hover:border-slate-800"
          onClick={() => fetchData(query, "portrait")}>
          <IoTabletPortraitSharp />
          <span>Portrait</span>
        </button>
      </div>
    </div>
  );
};

export default OreintationModal;
