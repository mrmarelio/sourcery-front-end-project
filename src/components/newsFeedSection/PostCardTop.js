import React from "react";
import PropTypes from "prop-types";
import "./post-card-top.scss";

const PostCardTop = ({ picture, name, location, time }) => {
  return (
    <div className="post-card-top">
      <div className="post-card-top__left">
        <img className="post-card-top__left__img" src={picture} alt="" />
        <span className="post-card-top__name">
          <strong>{name}</strong>
        </span>
      </div>
      <div className="post-card-top__right">
        <span className="post-card-top__right__loc">{location}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

PostCardTop.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.node,
  location: PropTypes.string,
  time: PropTypes.string,
};

export default PostCardTop;
