import React from "react";
import PropTypes from "prop-types";

import "./section-heading.scss";

const SectionHeading = ({ sectionName, children }) => {
  return (
    <div className="section-heading">
      <h2 className="section-heading__title">{sectionName}</h2>
      <div>{children}</div>
    </div>
  );
};

SectionHeading.propTypes = {
  sectionName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default SectionHeading;
