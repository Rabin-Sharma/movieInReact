import React, { useEffect, useState } from "react";
import Card from "./Card";
import { API_KEY } from "../utils/constraints";
import Pagination from "./Pagination";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieList, setMovie] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [moviesData, setMoviesData] = useState([]);
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`;
  const getMovies = async () => {
    const data = await fetch(url, API_KEY)
      .then((res) => res.json())
      .then((json) => {
        setMoviesData(json.results);
        setTotalPage(json.total_pages);
      });
  };
  const getSearchedMovie = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=${page}`;

    fetch(url, API_KEY)
      .then((res) => res.json())
      .then((json) => {
        setMovie(json.results);
        setTotalPage(json.total_pages);
      })
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
  }, [searchTerm, page]);
  let displayMovie = searchTerm.length > 0 ? movieList : moviesData;
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
          <Pagination
            page={page}
            setPage={setPage}
            totalPages={totalPage>500?500:totalPage}
          />
          <div className="row justify-content-center">
            {displayMovie.length > 0 ? (
              displayMovie.map((movie, index) => (
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
                  image={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                />
              ))
            ) : (
              <div>No movie Found</div>
            )}
          </div>
        </div>
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPage>500?500:totalPage}
        />
      </div>
    </>
  );
};

export default Search;
