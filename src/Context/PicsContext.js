import React, { createContext, useState } from "react";

const PicsContext = createContext({});

const PicsContextProvider = ({ children }) => {
  const [pics, setPics] = useState([]);
  const [query, setQuery] = useState("");

  return (
    <PicsContext.Provider value={{ pics, setPics, query, setQuery }}>
      {children}
    </PicsContext.Provider>
  );
};

export { PicsContext, PicsContextProvider };
