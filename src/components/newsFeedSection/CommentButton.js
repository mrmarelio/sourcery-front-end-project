import React from "react";
import PropTypes from "prop-types";
import Comment from "assets/icons/news-feed-icons/comment-icon.svg";
import "./comment-button.scss";

const CommentButton = ({ countOfComments }) => {
  return (
    <div className="comment-button">
      <button className="comment-button__btn">
        <img src={Comment} alt="comment icon" />
      </button>
      <span>{countOfComments}</span>
    </div>
  );
};

CommentButton.propTypes = {
  countOfComments: PropTypes.number,
};

export default CommentButton;
