import React, { useEffect, useState } from "react";
import { API_KEY } from "../utils/constraints";
import Card from "./Card";
import useFetchMovies from "../Services/fetchdata";

const PopularMovie = () => {
  // const [moviesData, setMoviesData] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const { data: moviesData, isLoading } = useFetchMovies(url);
  // const getMovies = async () => {
  //   const data = await fetch(url, API_KEY)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setMoviesData(json.results);
  //     });
  // };
  // useEffect(() => {
  //   getMovies();
  // }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Popular Movies</h2>
      <div className="row justify-content-center">
        {moviesData.length > 0 ? (
          moviesData.slice(0, 5).map((movie, index) => (
            <Card
              key={movie.id}
              id={movie.id}
              title={movie.title}
              // description={movie.overview}
              description={
                movie.overview.length >= 30
                  ? movie.overview.slice(0, 30) + "....."
                  : movie.overview
              }
              image={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            />
          ))
        ) : (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularMovie;
