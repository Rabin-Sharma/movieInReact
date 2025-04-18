import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/constraints";

const useFetchMovies = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

//   const url ="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const getMovies = async () => {
    setIsLoading(true);
    const data = await fetch(url, API_KEY)
      .then((res) => res.json())
      .then((json) => {
        setData(json.results);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getMovies();
  },[url]);
  return {
    data,
    isLoading,
  };
};

export default useFetchMovies;
