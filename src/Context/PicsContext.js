import React, { createContext, useState } from "react";

const PicsContext = createContext({});

const PicsContextProvider = ({ children }) => {
  const [pics, setPics] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [photo, setPhoto] = useState({});
  const [orientation, setOrientation] = useState();

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
        photo,
        setPhoto,
        orientation,
        setOrientation,
      }}>
      {children}
    </PicsContext.Provider>
  );
};

export { PicsContext, PicsContextProvider };
