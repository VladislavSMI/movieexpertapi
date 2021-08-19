import React from "react";
import spinner from "./spinner.gif";

export const Spinner = () => {
  return (
    <div className="all-center">
      <img src={spinner} alt="Loading..." className="spinner" />
    </div>
  );
};
