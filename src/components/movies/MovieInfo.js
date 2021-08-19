import React, { Fragment } from "react";

export const MovieInfo = ({ movieInfo }) => {
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

  return (
    <Fragment>
      <div className="card grid-2">
        <div className="all-center">
          <img src={Poster} alt={Title} style={{ width: "250px" }} />
        </div>
        <div>
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
        {Ratings.map((rating, idx) =>
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
