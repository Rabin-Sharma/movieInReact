import React, { useEffect, useState } from "react";
import Card from "./Card";
import { API_KEY } from "../utils/constraints";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieList, setMovie] = useState("");
  const [favourites, setFavourites] = useState([]);

  const [moviesData, setMoviesData] = useState([]);
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  //  'https://api.themoviedb.org/3/search/movie?query=adult&include_adult=true&language=en-US&page=1';
  const getMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWYzYThjNmEwY2UxZGM2YWQyYjRhZjVmOTdlNzU5NiIsIm5iZiI6MTc0MzQyOTQwOC4wODMwMDAyLCJzdWIiOiI2N2VhOWYyMGFmNzUyYTNiMjRmNzIyOWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.U5XW8lcOuFExYkXtIU9bAVg7gpKSiuW3_jpe4O3KD_w",
      },
    };

    const data = await fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMoviesData(json.results);
      });
  };
  const getSearchedMovie = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=true&language=en-US&page=1`;

    fetch(url, API_KEY)
      .then((res) => res.json())
      .then((json) => setMovie(json.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const sotoredFav = JSON.parse(localStorage.getItem("favourites"));
    console.log(sotoredFav);
  }, [favourites]);

  const handelFav = (movie) => {
    let updatedFav;

    if (favourites.some((fav) => fav.id === movie.id)) {
      updatedFav = favourites.filter((fav) => fav.id !== movie.id);
    } else {
      updatedFav = [...favourites, movie];
    }
    //update the local storage
    localStorage.setItem("favourites", JSON.stringify(updatedFav));
    setFavourites(updatedFav);
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      setMoviesData([]);
      getSearchedMovie();
    } else {
      setMovie([]);
      getMovies();
    }
  }, [searchTerm]);
  return (
    <>
      <div className="container my-3">
        <div className="heading">
          <h2 className="text-center">Search</h2>
        </div>
        <input
          className="form-control mb-5 shadow"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <div className="container my-4">
          <div className="row justify-content-center">
            {movieList.length > 0 && searchTerm.length > 0
              ? movieList.map((movie, index) => (
                  <Card
                    fav={() => {
                      handelFav(movie);
                    }}
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    // description={movie.overview}
                    description={
                      movie.overview.length >= 30
                        ? movie.overview.slice(0, 30) + "....."
                        : movie.overview
                    }
                    image={
                      "https://image.tmdb.org/t/p/w500" + movie.poster_path
                    }
                  />
                ))
              : moviesData.map((movie, index) => (
                  <Card
                    fav={() => {
                      handelFav(movie);
                    }}
                    movie={movie}
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    // description={movie.overview}
                    description={
                      movie.overview.length >= 30
                        ? movie.overview.slice(0, 30) + "....."
                        : movie.overview
                    }
                    image={
                      "https://image.tmdb.org/t/p/w500" + movie.poster_path
                    }
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
