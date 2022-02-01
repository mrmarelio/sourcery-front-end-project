import React, { useState, useEffect } from "react";
import Icon from "assets/icons/hero-slider-icons/slider-icon.svg";
import IconOpened from "assets/icons/hero-slider-icons/slider-open-icon.svg";
import NavButtons from "components/NavButtons";
import { NavLink } from "react-router-dom";
import Loader from "components/loader";
import PropTypes from "prop-types";
import "./hero-slider.scss";

const HeroSlider = ({ restaurants, isLoading }) => {
  const [fiveRestaurants, setFiveRestaurants] = useState([]);

  const [currRestaurant, setCurrRestaurant] = useState({});

  const [currIndex, setCurrIndex] = useState(0);

  const goLeft = () => {
    if (currIndex > 0) {
      setCurrIndex(currIndex - 1);
    } else if (currIndex === 0) {
      setCurrIndex(4);
    }
  };

  const goRight = () => {
    if (currIndex < 4) {
      setCurrIndex(currIndex + 1);
    } else if (currIndex === 4) {
      setCurrIndex(0);
    }
  };

  const iconsArr = [0, 1, 2, 3, 4];

  useEffect(() => {
    if (restaurants.length > 0) {
      while (fiveRestaurants.length < 5) {
        const randomRestaurant =
          restaurants[Math.floor(Math.random() * restaurants.length)];
        if (
          fiveRestaurants.findIndex(
            (elem) => randomRestaurant.id === elem.id
          ) === -1
        ) {
          fiveRestaurants.push(randomRestaurant);
        }
      }
      setFiveRestaurants(fiveRestaurants);
      const { id, slogan, name, description, image } =
        fiveRestaurants[currIndex];
      setCurrRestaurant({ id, slogan, name, description, image });
    }
  }, [restaurants, currIndex, fiveRestaurants]);

  const limitDescription = (content, name) => {
    const limit = name?.length > 25 ? 90 : 150;

    if (content?.length > limit) {
      return content.slice(0, limit) + "...";
    } else {
      return content;
    }
  };

  if (isLoading) {
    return (
      <div className="hero-slider">
        <div className="hero-slider__loader">
          <Loader color="rgba(0, 0, 0, 0.25)" />
        </div>
      </div>
    );
  }

  return (
    <div className="hero-slider">
      <div className="hero-slider__left">
        <div className="hero-slider__left__gradient"></div>

        <img
          className="hero-slider__left__img"
          src={currRestaurant.image}
          alt="restaurant img"
        />
      </div>
      <div className="hero-slider__right">
        <div className="hero-slider__right__top">
          <div className="hero-slider__right__top__icons">
            {iconsArr.map((elem) => (
              <img
                key={elem}
                src={elem === currIndex ? IconOpened : Icon}
                alt=""
              />
            ))}
          </div>
          <div>
            <NavButtons onClickLeft={goLeft} onClickRight={goRight} />
          </div>
        </div>
        <div>
          <div className="hero-slider__right__slogan">
            {currRestaurant.slogan}
          </div>
          <div className="hero-slider__right__title">{currRestaurant.name}</div>
        </div>
        <div className="hero-slider__right__about">
          {limitDescription(currRestaurant.description, currRestaurant.name)}
        </div>

        <NavLink to={"/eat-out/restaurant/" + currRestaurant.id}>
          <button type="button" className="hero-slider__right__button">
            Learn More
          </button>
        </NavLink>
      </div>
    </div>
  );
};

HeroSlider.propTypes = {
  restaurants: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default HeroSlider;
