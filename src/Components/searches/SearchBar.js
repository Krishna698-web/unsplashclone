import React, { useCallback, useContext, useEffect, useState } from "react";
import { PicsContext } from "../../Context/PicsContext";
import { BiSearchAlt } from "react-icons/bi";
import UnsplashAccess from "../../Context/UnsplashAccess";

const SearchBar = ({ onShowKeyword }) => {
  const { setPics, query, setQuery, page } = useContext(PicsContext);

  const { unsplash } = UnsplashAccess();

  const fetchData = async () => {
    const request = await unsplash.search.getPhotos({
      query: query,
      page: 1,
      perPage: 30,
      count: 1,
    });
    // console.log(request.response.results[2].id);
    if (request.response) {
      setPics(request.response.results);
      console.log(request.response.results);
    }
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <form
      onSubmit={searchSubmitHandler}
      className="w-full flex justify-center items-center drop-shadow-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Try 'book' or 'coin'"
        className="p-2 rounded-tl-sm rounded-bl-sm lg:w-1/2 md:w-3/4 sm:w-full max-sm:w-4/5 outline-none"
        onFocus={() => onShowKeyword(true)}
        onBlur={() => onShowKeyword(false)}
      />
      <button type="submit" className="bg-white rounded-r-sm p-2">
        <BiSearchAlt className="text-2xl" />
      </button>
    </form>
  );
};

export default SearchBar;
