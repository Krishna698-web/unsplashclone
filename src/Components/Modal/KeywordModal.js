import React, { useContext } from "react";
import { PicsContext } from "../../Context/PicsContext";

const KeywordModal = () => {
  const { setQuery } = useContext(PicsContext);

  return (
    <div className="absolute top-32 lg:w-1/2 md:w-3/4 sm:w-full drop-shadow-sm mt-2 px-3 py-2 rounded-sm border bg-white">
      <h1 className="text-2xl font-semibold">Popular search:</h1>
      <ul className="flex flex-wrap gap-2 mt-2">
        <li
          className="border px-4 py-2 rounded-sm cursor-pointer hover:drop-shadow-sm"
          onClick={() => setQuery("animals")}>
          animals
        </li>
        <li
          className="border px-4 py-2 rounded-sm cursor-pointer hover:drop-shadow-sm"
          onClick={() => setQuery("book")}>
          book
        </li>
        <li
          className="border px-4 py-2 rounded-sm cursor-pointer hover:drop-shadow-sm"
          onClick={() => setQuery("nature")}>
          nature
        </li>
        <li
          className="border px-4 py-2 rounded-sm cursor-pointer hover:drop-shadow-sm"
          onClick={() => setQuery("house")}>
          house
        </li>
      </ul>
    </div>
  );
};

export default KeywordModal;
