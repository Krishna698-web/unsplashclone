import React, { useContext, useState } from "react";
import { IoTabletPortraitSharp, IoTabletLandscapeSharp } from "react-icons/io5";
import { BiCategory, BiSquare } from "react-icons/bi";

import { PicsContext } from "../../Context/PicsContext";
import useFetch from "../../hooks/useFetch";
import Button from "../UI/Button";

const OreintationModal = () => {
  const { query } = useContext(PicsContext);
  const { fetchData } = useFetch();

  return (
    <div className="mb-5">
      <h2 className="font-semibold text-2xl mb-2">Orientation:</h2>
      <div className="flex flex-wrap w-full gap-5">
        <Button onClick={() => fetchData(query, null)}>
          <BiCategory />
          <span>All</span>
        </Button>
        <Button onClick={() => fetchData(query, "landscape")}>
          <IoTabletLandscapeSharp />
          <span>Landscape</span>
        </Button>
        <Button onClick={() => fetchData(query, "squarish")}>
          <BiSquare />
          <span>Square</span>
        </Button>
        <Button onClick={() => fetchData(query, "portrait")}>
          <IoTabletPortraitSharp />
          <span>Portrait</span>
        </Button>
      </div>
    </div>
  );
};

export default OreintationModal;
