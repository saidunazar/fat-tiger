import { useState, useEffect } from "react";

const useFetch = (apiUrl) => {
  const [response, setResponse] = useState();

  useEffect(() => {
    fetchResponseData();
  }, []);

  const fetchResponseData = async () => {
    try {
      const response = await fetch(apiUrl);
      const jsonResponse = await response.json();
      setResponse(jsonResponse);
    } catch (err) {
      console.log(err);
    }
  };

  return response;
};

export default useFetch;
