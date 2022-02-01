import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as StarIcon } from "assets/icons/filled-star.svg";

import "./review-card.scss";

const ReviewCard = ({ userName, comment, rating }) => {
  return (
    <div className="review-card">
      <div className="review-card__user-name">{userName}</div>
      <div className="review-card__comment">{comment}</div>
      <div className="review-card__rating">
        <StarIcon />
        {rating}
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  userName: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ReviewCard;
