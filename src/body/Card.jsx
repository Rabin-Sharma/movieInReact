import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const MovieCard = ({ title, id, description, image }) => {
  return (
    <div className="col-md-4 cardBody mb-4">
      <Link to={`/movie-detail/${id}`}>
        <div className="card shadow-sm">
          <img src={image} className="card-img-top movieImage" alt={title} />
          <div className="card-body">
            <p className="card-title fw-bold">{title}</p>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
