import React, { useState, useEffect } from "react";
import Card from "./Card";
import Navbar from "../layouts/Navbar"
import Footer from "../footer/Footer"
import { API_KEY } from "../utils/constraints";

const Home = ({searchTerm}) => {
  const [moviesData, setMoviesData] = useState([]);
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  //  'https://api.themoviedb.org/3/search/movie?query=adult&include_adult=true&language=en-US&page=1';
  const getMovies = async () => {


    const data = await fetch(url, API_KEY)
      .then((res) => res.json())
      .then((json) => {
        setMoviesData(json.results);
      });
  };
  useEffect(() => {
    getMovies();
  }, []);

  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="container my-4">
        <h2 className="text-center mb-4">Movies</h2>
        <div className="row justify-content-center">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => (
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
      
    </>
  );
};

export default Home;
