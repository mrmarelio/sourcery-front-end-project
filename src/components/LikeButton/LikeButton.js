import React, { useState } from "react";
import PropTypes from "prop-types";
import Like from "assets/icons/news-feed-icons/like-icon.svg";
import Liked from "assets/icons/news-feed-icons/like-pressed-icon.svg";
import "./like-button.scss";

const LikeButton = ({ isLiked, countOfLikes, isCountOfLikes }) => {
  const [like, setLike] = useState(isLiked);
  const [numOfLikes, setNumOfLikes] = useState(countOfLikes);

  const handleLikeClick = () => {
    if (!like) {
      setLike(true);
      setNumOfLikes(numOfLikes + 1);
    } else {
      setLike(false);
      setNumOfLikes(numOfLikes - 1);
    }
  };

  return (
    <div className="like-button">
      <button className="like-button__btn" onClick={handleLikeClick}>
        <img
          src={like ? Liked : Like}
          alt={
            like ? "pressed like button icon" : "not pressed like button icon"
          }
        />
      </button>
      {isCountOfLikes ? <span>{numOfLikes}</span> : null}
    </div>
  );
};

LikeButton.propTypes = {
  isLiked: PropTypes.bool,
  countOfLikes: PropTypes.number,
  isCountOfLikes: PropTypes.bool,
};

export default LikeButton;
