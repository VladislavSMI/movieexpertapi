import React from "react";
import PropTypes from "prop-types";

export const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary-darker">
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Kaver's movies",
  icon: "fas fa-film",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}