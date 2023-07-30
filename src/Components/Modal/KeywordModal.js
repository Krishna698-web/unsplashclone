import React, { useContext } from "react";
import { PicsContext } from "../../Context/PicsContext";

const KeywordModal = () => {
  const { setQuery } = useContext(PicsContext);

  return (
    <div className="fixed top-12 lg:w-1/2 md:w-4/5 sm:w-10/12 max-sm:w-10/12 drop-shadow-md mt-2 px-3 py-2 rounded-sm bg-white">
      <h1 className="text-2xl font-semibold">Popular search:</h1>
      <div className="flex flex-wrap gap-2 mt-2">
        <button
          className="border px-4 py-2 rounded-sm cursor-pointer hover:drop-shadow-sm transition hover:border-black"
          onClick={() => setQuery("mountains")}>
          mountains
        </button>
        <button
          className="border px-4 py-2 rounded-sm cursor-pointer hover:drop-shadow-sm transition hover:border-black"
          type="submit"
          onClick={() => setQuery("animal")}>
          animals
        </button>
        <button
          className="border px-4 py-2 rounded-sm cursor-pointer hover:drop-shadow-sm transition hover:border-black"
          onClick={() => setQuery("book")}>
          book
        </button>
        <button
          className="border px-4 py-2 rounded-sm cursor-pointer hover:drop-shadow-sm transition hover:border-black"
          onClick={() => setQuery("nature")}>
          nature
        </button>
        <button
          className="border px-4 py-2 rounded-sm cursor-pointer hover:drop-shadow-sm transition hover:border-black"
          onClick={() => setQuery("house")}>
          house
        </button>
      </div>
    </div>
  );
};

export default KeywordModal;
