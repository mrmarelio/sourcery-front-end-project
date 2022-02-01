import React from "react";
import PropTypes from "prop-types";
import Button from "components/Button";
import ReviewCard from "./ReviewCard";

import "./reviews-section.scss";

const ReviewsSection = ({ reviews }) => {
  return (
    <div className="reviews-section">
      <h2 className="h2-alt-font">Reviews</h2>
      <div className="reviews-section__card-holder">
        {reviews.slice(0, 5).map((review) => (
          <ReviewCard
            key={review.id}
            userName={review.userName}
            comment={review.comment}
            rating={review.rating}
          />
        ))}
      </div>
      {reviews.length > 5 ? <Button size="medium">Show More</Button> : null}
    </div>
  );
};

ReviewsSection.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsSection;
