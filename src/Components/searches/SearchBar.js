import React, { useContext, useEffect, useState } from "react";
import { PicsContext } from "../../Context/PicsContext";
import { BiSearchAlt } from "react-icons/bi";
import UnsplashAccess from "../../Context/UnsplashAccess";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { setPics } = useContext(PicsContext);

  const { unsplash } = UnsplashAccess();

  const fetchData = async () => {
    const request = await unsplash.search.getPhotos({
      query: query,
      count: 1,
    });
    // console.log(request.response.results[2].id);
    setPics(request.response.results);
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <form onSubmit={searchSubmitHandler}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">
        <BiSearchAlt />
      </button>
    </form>
  );
};

export default SearchBar;
