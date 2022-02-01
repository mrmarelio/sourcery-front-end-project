import React from "react";
import { NavLink } from "react-router-dom";

import Button from "../Button";

import "./browse-restaurants-widget.scss";

const BrowseRestaurantsWidget = () => {
  return (
    <div className="browse-restaurants-widget">
      <h3 className="browse-restaurants-widget_header">
        View all your favourite lunch spots and more
      </h3>
      <NavLink to="/eat-out">
        <Button size="medium">Browse list</Button>
      </NavLink>
    </div>
  );
};

export default BrowseRestaurantsWidget;
