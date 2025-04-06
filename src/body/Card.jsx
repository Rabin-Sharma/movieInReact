import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const MovieCard = ({ title, id, description, image, fav }) => {
  return (
    <div className="col-md-4 cardBody mb-4">
      <Link to={`/movie-detail/${id}`} className="text-decoration-none">
        <div className="card shadow-sm">
          <img src={image} className="card-img-top movieImage" alt={title} />
          <div className="card-body row">
            <div>
              <p className="card-title fw-bold">{title}</p>
              <p className="card-text">{description}</p>
            </div>
            <div className="row justify-content-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  fav();
                }}
                className="btn btn-danger btn-sm"
                type="button"
              >
                favourite
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
