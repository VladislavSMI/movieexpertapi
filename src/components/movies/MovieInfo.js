import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";

export const MovieInfo = ({ movieInfo, getmovieInfo, match }) => {
  const {
    Poster,
    Title,
    Plot,
    Year,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Language,
    Country,
    Awards,
    Ratings,
  } = movieInfo;

  useEffect(() => {
    getmovieInfo(match.params.imdbID);
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className="card grid-2">
        <div className="all-center">
          <Link to="/" className="btn btn-primary-darker m-2">
            Back To Search
          </Link>
          <img src={Poster} alt={Title} style={{ width: "250px" }} />
        </div>
        <div className="all-center">
          <h1>{Title}</h1>
          <p>{Plot}</p>
          <div className="list">
            <ul className="square">
              <li>Year: {Year}</li>
              <li>Runtime: {Runtime}</li>
              <li>Genre: {Genre}</li>
              <li>Director: {Director}</li>
              <li>Writer: {Writer}</li>
              <li>Actors: {Actors}</li>
              <li>Language: {Language}</li>
              <li>Country: {Country}</li>
              <li>Awards: {Awards}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card text-center">
        {Ratings &&
          Ratings.map((rating, idx) =>
            +rating.Value.charAt(0) >= 7 ? (
              <div key={idx} className="badge badge-success">
                {rating.Source}: {rating.Value}
              </div>
            ) : +rating.Value.charAt(0) >= 5 ? (
              <div key={idx} className="badge badge-attention">
                {rating.Source}: {rating.Value}
              </div>
            ) : (
              <div key={idx} className="badge badge-danger">
                {rating.Source}: {rating.Value}
              </div>
            )
          )}
      </div>
    </Fragment>
  );
};
