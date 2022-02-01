import React from "react";
import PropTypes from "prop-types";

import "./screen-center.scss";

const ScreenCenter = ({ children }) => {
  return <div className="screen-center">{children}</div>;
};

ScreenCenter.propTypes = {
  children: PropTypes.node,
};

export default ScreenCenter;
