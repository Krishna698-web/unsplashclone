import React, { useEffect, useState } from "react";
const api_url = "https://api.unsplash.com/photos/?client_id=";

const useHttp = async () => {
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await fetch(
      api_url + process.env.REACT_APP_UNSPLASH_API_KEY
    );
    const data = await response.json();
    apiData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const name = "krishna";

  return { apiData, name };
};

export default useHttp;
