import React, { Fragment } from "react";

import spinner from "../layout/spinner.gif";

export const MovieList = ({
  movies,
  favouriteComponent,
  handleFavouriteClick,
  movieInfoComponent,
  handleMovieInfoClick,
  displayFavouriteComponent,
  removeMovieComponent,
  handleRemoveMovieClick,
}) => {
  const FavouriteComponent = favouriteComponent;
  const MovieInfoComponent = movieInfoComponent;
  const RemoveMovieComponent = removeMovieComponent;

  return (
    <Fragment>
      {movies.map((movie, index) => (
        <div key={index} className="image-container flex-center m">
          {movie.Poster === "N/A" ? (
            <img src={spinner} alt={movie.Title} style={{ width: "200px" }} />
          ) : (
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "200px" }}
            />
          )}
          <div
            onClick={() => handleMovieInfoClick(movie.imdbID)}
            className="overlay top-left flex-center"
          >
            <MovieInfoComponent />
          </div>
          <div
            onClick={() => handleRemoveMovieClick(movie)}
            className="overlay top-right flex-center"
          >
            <RemoveMovieComponent />
          </div>
          {displayFavouriteComponent && (
            <div
              onClick={() => handleFavouriteClick(movie)}
              className="overlay bottom flex-center"
            >
              <FavouriteComponent />
            </div>
          )}
        </div>
      ))}
    </Fragment>
  );
};
