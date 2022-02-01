import React, { useState } from "react";
import PropTypes from "prop-types";
import Wish from "assets/icons/news-feed-icons/wish-icon.svg";
import WishSent from "assets/icons/news-feed-icons/wish-pressed-icon.svg";
import "./wish-button.scss";

const WishButton = ({ isWishSent, countOfWishes }) => {
  const [wish, setWish] = useState(isWishSent);
  const [numOfWishes, setNumOfWishes] = useState(countOfWishes);

  const handleWish = () => {
    if (!wish) {
      setWish(true);
      setNumOfWishes(numOfWishes + 1);
    } else {
      setWish(false);
      setNumOfWishes(numOfWishes - 1);
    }
  };

  return (
    <div className="wish-button">
      <button className="wish-button__btn" onClick={handleWish}>
        <img
          src={wish ? WishSent : Wish}
          alt={wish ? "wish sent icon" : "not sent wish icon"}
        />
      </button>
      <span>{numOfWishes}</span>
    </div>
  );
};

WishButton.propTypes = {
  isWishSent: PropTypes.bool,
  countOfWishes: PropTypes.number,
};

export default WishButton;
