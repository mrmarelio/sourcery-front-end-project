import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as HeartIcon } from "assets/icons/outline-heart.svg";
import Button from "components/Button";

import "./restaurant-header.scss";
import Rating from "components/rating";

const RestaurantHeader = ({ image, name, checkIns, reviews, categories }) => {
  return (
    <div className="restaurant-header">
      <img className="restaurant-header__image" src={image} alt="Restaurant" />
      <div className="restaurant-header__mask-image"></div>
      <div className="restaurant-header__text">
        <div className="restaurant-header__title-holder">
          <div className="restaurant-header__categories">
            {categories.map((item, index) => {
              return (
                <span key={index} className="restaurant-header__category-tag">
                  {item}
                </span>
              );
            })}
          </div>
          <h1 className="restaurant-header__title">{name}</h1>
        </div>
        <div className="restaurant-header__action-bar">
          <div className="restaurant-header__action-bar-icons">
            <div className="restaurant-header__action-bar-rating">
              <Rating reviews={reviews} />
            </div>
            <div className="restaurant-header__action-bar-like">
              <HeartIcon />
              {/* TODO: padaryti kad paspaudus kazkas veiktu */}
            </div>
          </div>
          <div className="restaurant-header__action-bar-text">
            <span>{checkIns} People already checked-in!</span>
          </div>
          <div className="restaurant-header__action-bar-buttons">
            <Button size="medium" type="text">
              Invite
            </Button>
            <Button size="medium">Check in</Button>
            {/* TODO: sudeti linkus kad buttonai veiktu */}
          </div>
        </div>
      </div>
    </div>
  );
};

RestaurantHeader.defaultProps = {
  name: "",
  checkIns: "",
  reviews: [],
  categories: [],
};

RestaurantHeader.propTypes = {
  image: PropTypes.node.isRequired,
  name: PropTypes.string,
  checkIns: PropTypes.number,
  reviews: PropTypes.array,
  categories: PropTypes.array,
};

export default RestaurantHeader;
