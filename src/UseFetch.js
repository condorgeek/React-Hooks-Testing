const { useState, useEffect } = require("react");

const getData = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed fetching data on " + url);
      }
      return response.json();
    })
    .catch((error) => {
      console.log("Failed fetching data on " + url, error);
      throw new Error(error);
    });
};

const useFetch = (url) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle"); // loading, success, error

  useEffect(() => {
    setStatus("loading");
    getData(url)
      .then((json) => {
        setData(json);
        setStatus("success");
      })
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
  }, [url]);

  return [data, error, status];
};

export default useFetch;
