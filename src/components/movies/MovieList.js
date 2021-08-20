import React, { Fragment } from "react";
import PropTypes from "prop-types";

import spinner from "../layout/spinner.gif";

export const MovieList = ({
  movies,
  favouriteComponent,
  handleFavouriteClick,
  movieInfoComponent,
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
        <div
          key={index}
          className="image-container flex-center m"
          style={{ maxHeight: "300px" }}
        >
          {movie.Poster === "N/A" ? (
            <img src={spinner} alt={movie.Title} style={{ width: "200px" }} />
          ) : (
            <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "200px" }}
            />
          )}
          <div className="overlay top-left flex-center">
            <MovieInfoComponent imdbID={movie.imdbID} />
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

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  favouriteComponent: PropTypes.elementType,
  handleFavouriteClick: PropTypes.func.isRequired,
  movieInfoComponent: PropTypes.elementType.isRequired,
  displayFavouriteComponent: PropTypes.bool.isRequired,
  removeMovieComponent: PropTypes.func.isRequired,
  handleRemoveMovieClick: PropTypes.func.isRequired,
};
