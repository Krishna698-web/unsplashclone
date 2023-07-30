import React, { useContext, useState } from "react";
import { IoTabletPortraitSharp, IoTabletLandscapeSharp } from "react-icons/io5";
import { BiCategory, BiSquare } from "react-icons/bi";

import { PicsContext } from "../../Context/PicsContext";

const OreintationModal = () => {
  const { setOrientation } = useContext(PicsContext);

  return (
    <div className="mb-2">
      <h2>Orientation:</h2>
      <div className="flex flex-wrap w-full justify-between">
        <button
          className="flex gap-1 items-center border py-2 px-5 rounded-md text-gray-500 hover:text-gray-800"
          onClick={() => setOrientation(null)}>
          <BiCategory />
          <span>All</span>
        </button>
        <button
          className="flex gap-1 items-center border py-2 px-5 rounded-md text-gray-500 hover:text-gray-800"
          onClick={() => setOrientation("landscape")}>
          <IoTabletLandscapeSharp />
          <span>Landscape</span>
        </button>
        <button
          className="flex gap-1 items-center border py-2 px-5 rounded-md text-gray-500 hover:text-gray-800"
          onClick={() => setOrientation("squarish")}>
          <BiSquare />
          <span>Square</span>
        </button>
        <button
          className="flex gap-1  items-center  border py-2 px-5 rounded-md text-gray-500 hover:text-gray-800"
          onClick={() => setOrientation("portrait")}>
          <IoTabletPortraitSharp />
          <span>Portrait</span>
        </button>
      </div>
    </div>
  );
};

export default OreintationModal;
