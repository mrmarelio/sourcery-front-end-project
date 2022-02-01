import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as StarIconOutlined } from "assets/icons/star-outline.svg";

import "./rating.scss";

const Rating = ({ reviews }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [ratingAverage, setRatingAverage] = useState("-");
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setRatingAverage(calcRatingAverage(reviews));
  }, [reviews]);

  const calcRatingAverage = (reviews) => {
    if (reviews?.length > 0) {
      return parseFloat(
        reviews.reduce(
          (total, currentValue) => (total = total + currentValue.rating),
          0
        ) / reviews.length
      ).toFixed(1);
    } else return "-";
  };

  const setNewRating = (index) => {
    setRating(index);
    const adjustedReviews = [...reviews, { rating: index }];
    setRatingAverage(calcRatingAverage(adjustedReviews));
  };

  return (
    <div
      className="rating"
      tabIndex="-1"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {!isHovering && (
        <StarIconOutlined
          className={classNames({
            "rating--base-star-filled": rating !== 0,
          })}
        />
      )}
      {isHovering && (
        <div className="rating__expanded">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= (hover || rating) ? "on" : "off"}
                onClick={() => setNewRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <StarIconOutlined className="star" />
              </button>
            );
          })}
        </div>
      )}
      <span>{ratingAverage}</span>
    </div>
  );
};

Rating.propTypes = {
  reviews: PropTypes.array,
};

export default Rating;
