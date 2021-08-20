import React from "react";
import PropTypes from "prop-types";

export const MovieListHeading = ({ heading }) => {
  return (
    <div className="my-1">
      <h1>{heading}</h1>
    </div>
  );
};

MovieListHeading.propTypes = {
  heading: PropTypes.string.isRequired,
};
