import { useContext } from "react";
import "./App.css";

import { PicsContext } from "./Context/PicsContext";
import SearchedPhotos from "./Components/Photos/SearchedPhotos";
import RandomPhotos from "./Components/Photos/RandomPhotos";
import Header from "./Components/Header";

const App = () => {
  const { query } = useContext(PicsContext);

  return (
    <div className="w-full h-screen">
      <Header />
      <div className="w-full flex justify-center bg-white">
        {query && query !== "" ? <SearchedPhotos /> : <RandomPhotos />}
      </div>
    </div>
  );
};

export default App;
