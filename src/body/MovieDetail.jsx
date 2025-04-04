import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./card.css";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const getDetail = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWYzYThjNmEwY2UxZGM2YWQyYjRhZjVmOTdlNzU5NiIsIm5iZiI6MTc0MzQyOTQwOC4wODMwMDAyLCJzdWIiOiI2N2VhOWYyMGFmNzUyYTNiMjRmNzIyOWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.U5XW8lcOuFExYkXtIU9bAVg7gpKSiuW3_jpe4O3KD_w",
      },
    };

    await fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovieDetail(json))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getDetail();
  }, []);
  console.log(movieDetail);
  return (
    <>
      <div className="container pt-3 pb-5">
        <div className="d-flex gap-4">
            <img
              className="w-25"
              src={"https://image.tmdb.org/t/p/w500" + movieDetail.poster_path}
              alt=""
            />
          <div className="card w-100 p-3">
            <div className="">
              <h4>{movieDetail.title} : </h4> <h6>{movieDetail.tagline}</h6>
              <p>Released on {movieDetail.release_date}</p>
              <p>{movieDetail.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
