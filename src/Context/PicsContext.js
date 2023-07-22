import React, { createContext, useState } from "react";

const PicsContext = createContext({});

const PicsContextProvider = ({ children }) => {
  const [pics, setPics] = useState([]);

  return (
    <PicsContext.Provider value={{ pics, setPics }}>
      {children}
    </PicsContext.Provider>
  );
};

export { PicsContext, PicsContextProvider };
