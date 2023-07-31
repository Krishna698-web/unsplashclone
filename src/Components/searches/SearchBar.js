import React, { useCallback, useContext, useEffect, useState } from "react";
import { PicsContext } from "../../Context/PicsContext";
import { BiSearchAlt } from "react-icons/bi";
import useFetch from "../../hooks/useFetch";
import KeywordModal from "../Modal/KeywordModal";

const SearchBar = () => {
  const [showKeywords, setShowKeywords] = useState(false);

  const { query, setQuery, page } = useContext(PicsContext);
  const { fetchData } = useFetch();

  useEffect(() => {
    fetchData(query);
  }, [page, query]);

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    fetchData(query);
  };

  return (
    <form
      onSubmit={searchSubmitHandler}
      className="w-full flex justify-center items-center drop-shadow-sm">
      <div
        className="flex items-center justify-center lg:w-1/2 md:w-3/4 sm:w-4/5 max-sm:w-4/5 rounded-md border-2"
        onClick={() => setShowKeywords(!showKeywords)}>
        <button
          type="submit"
          className="bg-white rounded-l-sm p-3 text-gray-500 hover:text-gray-800 transition">
          <BiSearchAlt className="text-2xl" />
        </button>
        <input
          type="text"
          onChange={(e) =>
            setQuery(e.target.value !== "" ? e.target.value : null)
          }
          placeholder="Try 'book' or 'coin'"
          className="p-3 rounded-r-sm w-full outline-none"
        />
        {showKeywords && <KeywordModal />}
      </div>
    </form>
  );
};

export default SearchBar;
