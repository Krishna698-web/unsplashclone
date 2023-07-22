import "./App.css";
import { useEffect, useReducer, useState } from "react";
import SearchBar from "./Components/SearchBar";
// import useHttp from "./custom-hook/useHttp";

const api_url = "https://api.unsplash.com/photos/?client_id=";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default App;
