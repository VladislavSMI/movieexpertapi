import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const GetMovieInfo = ({imdbID}) => {
  return (
    <Fragment>
      <Link to={`/movie/${imdbID}`}>
        <span className="small mx">More Info</span>
        <i className="fas fa-info" style={{ color: "orange" }}></i>
      </Link>
    </Fragment>
  );
};
