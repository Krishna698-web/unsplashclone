import React, { createContext, useState } from "react";

const PicsContext = createContext({});

const PicsContextProvider = ({ children }) => {
  const [pics, setPics] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  return (
    <PicsContext.Provider
      value={{ pics, setPics, query, setQuery, page, setPage }}>
      {children}
    </PicsContext.Provider>
  );
};

export { PicsContext, PicsContextProvider };
