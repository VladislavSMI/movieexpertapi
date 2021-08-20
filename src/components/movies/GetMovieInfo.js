import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const GetMovieInfo = ({ imdbID }) => {
  return (
    <Fragment>
      <Link
        to={`/movie/${imdbID}`}
        className="btn-link all-center"
        style={{ flexDirection: "row" }}
      >
        <span className="small mx">Info</span>
        <i className="fas fa-info" style={{ color: "orange" }}></i>
      </Link>
    </Fragment>
  );
};
