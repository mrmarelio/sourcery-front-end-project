import React from "react";
import PropTypes from "prop-types";
import "./section-title.scss";

const SectionTitle = ({ title }) => {
  return <h2 className="section-title">{title}</h2>;
};

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
