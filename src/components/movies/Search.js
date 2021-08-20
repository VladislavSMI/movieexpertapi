import React from "react";
import PropTypes from "prop-types";

export const Search = ({ searchValue, setSearchValue }) => {
  return (
    <div>
      <input
        type="text"
        name="text"
        placeholder="Search for movies..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>
    </div>
  );
};

Search.propTypes = {
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};
