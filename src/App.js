import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from "axios";

import { Navbar } from "./components/layout/Navbar";
import { MovieList } from "./components/movies/MovieList";
import { MovieListHeading } from "./components/movies/MovieListHeading";
import { Search } from "./components/movies/Search";
import { AddWatchNext } from "./components/movies/AddWatchNext";
import { RemoveMovie } from "./components/movies/RemoveMovie";
import { GetMovieInfo } from "./components/movies/GetMovieInfo";
import { MovieInfo } from "./components/movies/MovieInfo";
import { AddWatched } from "./components/movies/AddWatched";

import "./App.css";

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [moviesWatchNext, setMoviesWatchNext] = useState([]);
  const [movieInfo, setMovieInfo] = useState({});
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  let movieApiKey;

  if (process.env.NODE_ENV !== "production") {
    movieApiKey = process.env.REACT_APP_MOVIE_API_KEY_LOCAL;
  } else {
    movieApiKey = process.env.REACT_APP_MOVIE_API_KEY_PRODUCTION;
  }

  // Search Movies section code
  const searchMovies = async (searchValue) => {
    const res = await axios.get(
      `https://www.omdbapi.com/?s=${searchValue}&apikey=${movieApiKey}`
    );

    if (res.data.Search) {
      setMovies(res.data.Search);
    }
  };

  useEffect(() => {
    searchMovies(searchValue);
    // eslint-disable-next-line
  }, [searchValue]);

  // Remove from searched movies
  const removeMovie = (movie) => {
    const newMovieList = movies.filter((mov) => mov.imdbID !== movie.imdbID);
    setMovies(newMovieList);
  };

  // Get movie info section code
  const getMovieInfo = async (imdbID) => {
    setLoading(true);
    const res = await axios.get(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=${movieApiKey}`
    );

    if (res.data) {
      setMovieInfo(res.data);
    }

    setLoading(false);
  };

  // Movies Watch next section code
  // Get moviesWatchNext from local storage
  useEffect(() => {
    const moviesWatchNext = JSON.parse(
      localStorage.getItem("react-movie-app-moviesWatchNext")
    );
    if (moviesWatchNext) {
      setMoviesWatchNext(moviesWatchNext);
    }
  }, []);

  // Set moviesWatchNext to local storage
  const saveToLocalStorageMovieWatchNext = (items) => {
    localStorage.setItem(
      "react-movie-app-moviesWatchNext",
      JSON.stringify(items)
    );
  };

  // Add movieWatchNext
  const addMovieWatchNext = (movie) => {
    const uniqueMovieWatchNext = moviesWatchNext.filter(
      (mov) => mov.imdbID === movie.imdbID
    );

    if (!uniqueMovieWatchNext.length) {
      const newMoviesWatchNextList = [movie, ...moviesWatchNext];
      setMoviesWatchNext(newMoviesWatchNextList);
      saveToLocalStorageMovieWatchNext(newMoviesWatchNextList);
    }
  };

  // Remove movieWatchNext
  const removeMovieWachtNext = (movie) => {
    const newMoviesWatchNextList = moviesWatchNext.filter(
      (mov) => mov.imdbID !== movie.imdbID
    );

    setMoviesWatchNext(newMoviesWatchNextList);
    saveToLocalStorageMovieWatchNext(newMoviesWatchNextList);
  };

  // Watched Movies section code
  // Get wachedMovies from local storage
  useEffect(() => {
    const watchedMovies = JSON.parse(
      localStorage.getItem("react-movie-app-watchedMovies")
    );
    if (watchedMovies) {
      setWatchedMovies(watchedMovies);
    }
  }, []);

  // Set watchedMovies to local storage
  const saveToLocalStorageWatchedMovies = (items) => {
    localStorage.setItem(
      "react-movie-app-watchedMovies",
      JSON.stringify(items)
    );
  };

  // Add watchedMovies
  const addWatchedMovies = (movie) => {
    const uniqueWatchedMovies = watchedMovies.filter(
      (mov) => mov.imdbID === movie.imdbID
    );

    if (!uniqueWatchedMovies.length) {
      const newWatchedMoviesList = [movie, ...watchedMovies];
      setWatchedMovies(newWatchedMoviesList);
      saveToLocalStorageWatchedMovies(newWatchedMoviesList);
    }
    removeMovieWachtNext(movie);
  };

  // Remove watchedMovies
  const removeWatchedMovies = (movie) => {
    const newWatchedMovieList = watchedMovies.filter(
      (mov) => mov.imdbID !== movie.imdbID
    );
    setWatchedMovies(newWatchedMovieList);
    saveToLocalStorageWatchedMovies(newWatchedMovieList);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container text-center">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                  />
                  {movies.length > 0 && (
                    <Fragment>
                      <MovieListHeading heading={"Results"} />
                      <div
                        className="flex-row border"
                        style={{ minHeight: "300px" }}
                      >
                        <MovieList
                          movies={movies}
                          favouriteComponent={AddWatchNext}
                          handleFavouriteClick={addMovieWatchNext}
                          movieInfoComponent={GetMovieInfo}
                          removeMovieComponent={RemoveMovie}
                          handleRemoveMovieClick={removeMovie}
                          displayFavouriteComponent={true}
                        />
                      </div>
                    </Fragment>
                  )}

                  {moviesWatchNext.length > 0 && (
                    <Fragment>
                      <MovieListHeading heading={"Watch Next"} />
                      <div
                        className="flex-row border"
                        style={{ minHeight: "300px" }}
                      >
                        <MovieList
                          movies={moviesWatchNext}
                          favouriteComponent={AddWatched}
                          handleFavouriteClick={addWatchedMovies}
                          movieInfoComponent={GetMovieInfo}
                          removeMovieComponent={RemoveMovie}
                          handleRemoveMovieClick={removeMovieWachtNext}
                          displayFavouriteComponent={true}
                        />
                      </div>
                    </Fragment>
                  )}

                  {watchedMovies.length > 0 && (
                    <Fragment>
                      <MovieListHeading heading={"Watched"} />
                      <div
                        className="flex-row border"
                        style={{ minHeight: "300px" }}
                      >
                        <MovieList
                          movies={watchedMovies}
                          handleFavouriteClick={removeWatchedMovies}
                          movieInfoComponent={GetMovieInfo}
                          removeMovieComponent={RemoveMovie}
                          handleRemoveMovieClick={removeWatchedMovies}
                          displayFavouriteComponent={false}
                        />
                      </div>
                    </Fragment>
                  )}
                </Fragment>
              )}
            />

            <Route
              exact
              path="/movie/:imdbID"
              render={(props) => (
                <MovieInfo
                  {...props}
                  getmovieInfo={getMovieInfo}
                  movieInfo={movieInfo}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
