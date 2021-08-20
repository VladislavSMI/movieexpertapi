import React, { Fragment } from "react";

export const RemoveMovie = () => {
  return (
    <Fragment>
      <span className="small mx">Remove</span>
      <i className="fas fa-times" style={{ color: "red" }}></i>
    </Fragment>
  );
};
