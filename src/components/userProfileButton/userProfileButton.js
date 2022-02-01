import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import profilePicture from "assets/profile-picture.jpg";
import UserProfileWidget from "components/userProfileWidget";
import { useAuth } from "features/userData";

import "./user-profile-button.scss";

const UserProfileButton = () => {
  const ref = useRef(null);
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const handleShowOnClick = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  const handleClickOutside = (event) => {
    if (!ref.current?.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const { userData } = useAuth();

  return (
    <div
      className="user-profile-button"
      onClick={handleShowOnClick}
      onKeyDown={handleShowOnClick}
      ref={ref}
      role="button"
      tabIndex={0}
    >
      <img
        className="user-profile-button__image"
        src={userData?.userImage || profilePicture}
        alt="profile pic"
      />
      <HeartIcon className="user-profile-button__icon" />
      {isComponentVisible && <UserProfileWidget />}
    </div>
  );
};

export default UserProfileButton;
