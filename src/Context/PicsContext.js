import React, { createContext, useState } from "react";

const PicsContext = createContext({});

const PicsContextProvider = ({ children }) => {
  const [pics, setPics] = useState([]);
  const [query, setQuery] = useState();
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  return (
    <PicsContext.Provider
      value={{
        pics,
        setPics,
        query,
        setQuery,
        page,
        setPage,
        showModal,
        setShowModal,
      }}>
      {children}
    </PicsContext.Provider>
  );
};

export { PicsContext, PicsContextProvider };
