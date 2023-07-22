import React, { useEffect, useState } from "react";
import { createApi } from "unsplash-js";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const [apiData, setApiData] = useState([]);

  const unsplash = createApi({
    accessKey: process.env.REACT_APP_UNSPLASH_API_KEY,
  });

  const fetchData = () => {
    unsplash.photos.get({ photoId: query }).then((result) => {
      if (result.errors) {
        console.log("error occured: ", result.errors[0]);
      } else {
        const photos = result.response;
        console.log(photos[0].urls);
        setApiData(photos.urls);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
