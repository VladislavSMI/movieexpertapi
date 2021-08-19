import React from "react";

export const Search = ({searchValue, setSearchValue}) => {
  return (
    <div>
      <input
        type="text"
        name="text"
        placeholder="Search for movies..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}>
      </input>
    </div>
  );
};
