import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import shortenWebsiteLink from "utils/shortenWebsiteLink";

import { ReactComponent as AvatarIcon } from "assets/icons/avatar.svg";
import { ReactComponent as StarIcon } from "assets/icons/filled-star.svg";
import { ReactComponent as EllipseIcon } from "assets/icons/ellipse.svg";
import { ReactComponent as FilledHeartIcon } from "assets/icons/filled-heart.svg";
import { ReactComponent as GlobeIcon } from "assets/icons/globe-outlined.svg";
import { ReactComponent as MapPinIcon } from "assets/icons/map-pin-outlined.svg";
import { ReactComponent as OutlineHeartIcon } from "assets/icons/outline-heart.svg";

import Button from "../Button";

import "./restaurant-card.scss";

const RestaurantCard = ({
  restaurant: {
    id,
    name,
    checkIns,
    image,
    reviews,
    categories,
    openingHours,
    website,
    location,
    description,
  },
  fullCard = false,
  liked = false,
}) => {
  const ratingAverage = (reviews) => {
    if (reviews?.length > 0) {
      return parseFloat(
        reviews.reduce(
          (total, currentValue) => (total = total + currentValue.rating),
          0
        ) / reviews.length
      ).toFixed(1);
    } else return "-";
  };

  return (
    <div className="restaurant-card" data-testid="restaurantCard">
      {id && image && (
        <a
          href={"/eat-out/restaurant/" + id}
          className="restaurant-card__image-container"
        >
          <img
            className={classNames("restaurant-card__image-container__image", {
              "restaurant-card__image--large": fullCard,
            })}
            alt="restaurant"
            src={image}
          />
        </a>
      )}
      {!fullCard && (
        <div className="restaurant-card__check-in" data-testid="checkIn">
          <AvatarIcon />
          <span>{checkIns}</span>
        </div>
      )}
      <div className="restaurant-card__rating">
        <StarIcon />
        <span>{ratingAverage(reviews)}</span>
      </div>
      <div
        className={classNames("restaurant-card__description", {
          "restaurant-card__description--large": fullCard,
        })}
      >
        <div className="restaurant-card__description__categories">
          {categories?.map((item, index, array) => {
            return (
              <Fragment key={index}>
                <span className="restaurant-card__description__categories__name">
                  {item}
                </span>
                {index !== array.length - 1 ? (
                  <EllipseIcon className="restaurant-card__description__categories__icon" />
                ) : (
                  ""
                )}
              </Fragment>
            );
          })}
        </div>
        <div className="restaurant-card__description__title-bar">
          <div className="restaurant-card__description__title-bar__title">
            <a href={"/eat-out/restaurant/" + id}>{name}</a>
          </div>
          <div className="restaurant-card__description__title-bar__icon">
            {liked ? <FilledHeartIcon /> : <OutlineHeartIcon />}
          </div>
        </div>
        <span className="restaurant-card__description__time">
          {openingHours && openingHours[0].hours}
        </span>
        {fullCard && (
          <div className="restaurant-card__details" data-testid="fullCard">
            <div className="restaurant-card__details__icon">
              <GlobeIcon />
              <a href={website} target="_blank" rel="noopener noreferrer">
                {shortenWebsiteLink(website)}
              </a>
            </div>
            <div className="restaurant-card__details__icon">
              <MapPinIcon />
              <a
                target="_blank"
                href={"https://www.google.com/maps/search/" + location.address}
                rel="noopener noreferrer"
              >
                {location.address}
              </a>
            </div>
            <div className="restaurant-card__details__description">
              {description}
            </div>
            <div className="restaurant-card__details__buttons">
              <a href={"/eat-out/restaurant/" + id}>
                <Button
                  size="medium"
                  type="text"
                  href={"/eat-out/restaurant/" + id}
                >
                  Read more
                </Button>
              </a>
              <Button size="medium" to="/eat-out">
                Check-in
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

RestaurantCard.propTypes = {
  restaurant: PropTypes.object.isRequired,
  fullCard: PropTypes.bool,
  liked: PropTypes.bool,
};

export default RestaurantCard;
