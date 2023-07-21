import "./App.css";
import { useEffect, useReducer, useState } from "react";
// import useHttp from "./custom-hook/useHttp";

const api_url = "https://api.unsplash.com/photos/?client_id=";

const App = () => {
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await fetch(
      api_url + process.env.REACT_APP_UNSPLASH_API_KEY
    );
    const data = await response.json();

    setApiData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(apiData);

  return (
    <div>
      {apiData.map((data, index) => (
        <>
          <img src={data.urls.raw} style={{ height: "10rem" }} />
        </>
      ))}
    </div>
  );
};

export default App;
