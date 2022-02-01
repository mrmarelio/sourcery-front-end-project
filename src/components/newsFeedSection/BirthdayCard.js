import React from "react";
import PropTypes from "prop-types";
import LeftIcons from "assets/icons/news-feed-icons/birthday-left.svg";
import RightIcons from "assets/icons/news-feed-icons/birthday-right.svg";

import CommentsSection from "./CommentsSection";
import Divider from "./Divider";
import "./birthday-card.scss";

const BirthdayCard = ({ name, picture, date, wishes, comments, userImage }) => {
  return (
    <div className="birthday-card">
      <div className="birthday-card__picture">
        <img className="birthday-card__picture__img" src={picture} alt="" />
      </div>
      <div className="birthday-card__content">
        <div className="birthday-card__content__grid">
          <div className="birthday-card__content__grid__icons">
            <img
              className="birthday-card__content__grid__icons__icons"
              src={LeftIcons}
              alt=""
            />
            <img
              className="birthday-card__content__grid__icons__icons"
              src={RightIcons}
              alt=""
            />
          </div>

          <div className="birthday-card__content__grid__text">
            <span>
              <strong>{name.toUpperCase()}</strong>
            </span>
            <span>
              Celebrated a birthday on <strong>{date}</strong>
            </span>
            <span>
              <strong>Send a wish!</strong>
            </span>
          </div>
        </div>
        <div className="birthday-card__content__divider">
          <Divider />
        </div>
        <CommentsSection
          isBirthday={true}
          wishes={wishes}
          allComments={comments}
          userImage={userImage}
        />
      </div>
    </div>
  );
};

BirthdayCard.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.node,
  date: PropTypes.string,
  wishes: PropTypes.number,
  comments: PropTypes.array,
  userImage: PropTypes.node,
};

export default BirthdayCard;
