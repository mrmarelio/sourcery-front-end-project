import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as FilledHeartIcon } from "assets/icons/filled-heart.svg";
import { ReactComponent as OutlineHeartIcon } from "assets/icons/outline-heart.svg";
import { ReactComponent as AvailableItemIcon } from "assets/icons/available-item.svg";
import { ReactComponent as BookedItemIcon } from "assets/icons/booked-item.svg";
import { ReactComponent as StarIcon } from "assets/icons/filled-star.svg";
import Button from "../Button";
import FormatStringDate from "utils/FormatStringDate";
import "./reservations-list-card.scss";

const ReservationsListCard = ({
  id,
  name,
  title,
  rating,
  quantity,
  bookedUntil,
  image,
  author,
  brand,
  liked,
}) => {
  let stateIcon,
    stateText,
    minDate = "",
    dateArray = [];

  if (brand && bookedUntil?.length) {
    stateIcon = <BookedItemIcon />;
    stateText = "Booked until";
    dateArray = bookedUntil;

    for (let i = 0; i < dateArray.length; i++) {
      let current = dateArray[i];
      if (minDate != null || current.date < minDate.date) {
        minDate = current.date;
      }
    }
  } else if (quantity === 0) {
    stateIcon = <BookedItemIcon />;
    stateText = "No devices left";
  } else {
    stateIcon = <AvailableItemIcon />;
    stateText = "Available";
  }

  if (author && bookedUntil) {
    stateIcon = <BookedItemIcon />;
    stateText = "Booked until";
    minDate = bookedUntil;
  } else if (author && !bookedUntil) {
    stateIcon = <AvailableItemIcon />;
    stateText = "Available";
  }

  return (
    <div className="reservations-list-card">
      <a
        href={brand ? `/device/${id}` : `/book/${id}`}
        className="reservations-list-card__image-wrapper"
      >
        <img
          className="reservations-list-card__image-wrapper__image"
          alt="item img"
          src={image}
        />
      </a>
      <div className="reservations-list-card__brand ">
        {brand ? brand : author}
      </div>
      <div className="reservations-list-card__icon">
        {liked ? <FilledHeartIcon /> : <OutlineHeartIcon />}
      </div>
      <a
        href={brand ? `/device/${id}` : `/book/${id}`}
        className="reservations-list-card__name-wrapper"
      >
        <div className="reservations-list-card__name-wrapper__name">
          {name ? name : title}
        </div>
      </a>
      <div className="reservations-list-card__availability">
        {stateIcon}&nbsp; {stateText}&nbsp;
        {minDate && FormatStringDate(minDate)}
      </div>
      {brand && (
        <div className="reservations-list-card__quantity">
          QUANTITY: {quantity}
        </div>
      )}
      {rating && (
        <div className="reservations-list-card__rating">
          <StarIcon />
          <span>{Math.round(rating * 10) / 10}</span>
        </div>
      )}
      <div className="reservations-list-card__buttons">
        <Button size="medium" type="text" href={"/device/" + id}>
          View More
        </Button>
        <Button size="medium" to="/device">
          Book
        </Button>
      </div>
    </div>
  );
};

ReservationsListCard.propTypes = {
  liked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  quantity: PropTypes.number,
  bookedUntil: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  image: PropTypes.node,
  author: PropTypes.string,
  brand: PropTypes.string,
};

ReservationsListCard.defaultProps = {
  liked: false,
};

export default ReservationsListCard;
