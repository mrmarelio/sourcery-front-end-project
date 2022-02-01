import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import "./breadcrumbs.scss";

const Breadcrumbs = ({ lastLevel }) => {
  const location = useLocation();
  const locationPathname = location.pathname;
  const pathnameArr = locationPathname.split("/");
  const secondLevel = pathnameArr[1];
  const linkSecondlvl = "/" + secondLevel.toLowerCase();

  return (
    <nav className="breadcrumbs">
      <a href="/" className="breadcrumbs__link">
        <span>Dashboard</span>
      </a>
      <a href={linkSecondlvl} className="breadcrumbs__link">
        <span>{secondLevel}</span>
      </a>
      {lastLevel && (
        <a href={locationPathname} className="breadcrumbs__link">
          <span>{lastLevel}</span>
        </a>
      )}
    </nav>
  );
};

Breadcrumbs.propTypes = {
  lastLevel: PropTypes.string,
};

Breadcrumbs.defaultProps = {
  lastLevel: null,
};

export default Breadcrumbs;
