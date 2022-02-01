import React from "react";
import PropTypes from "prop-types";
import "./post-comment.scss";

const PostComment = ({ name, comment, date }) => {
  return (
    <div className="post-comment">
      <div className="post-comment__top">
        <div className="post-comment__top__name">
          <strong>{name}</strong>
        </div>
        <div>{date}</div>
      </div>
      <div className="post-comment__text">
        <div>{comment}</div>
      </div>
    </div>
  );
};

PostComment.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  comment: PropTypes.string,
};

export default PostComment;
