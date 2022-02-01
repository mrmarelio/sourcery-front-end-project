import React from "react";
import { useAuth } from "features/userData";
import SettingsIcon from "assets/icons/settings.svg";
import LogOutIcon from "assets/icons/log-out.svg";

import "./user-profile-widget.scss";

const UserProfileWidget = () => {
  const { logOut } = useAuth();

  const dropdownItems = [
    {
      onClick: () => {},
      imgSrc: SettingsIcon,
      imgAlt: "settings icon",
      itemName: "Settings",
    },
    {
      onClick: () => logOut(),
      imgSrc: LogOutIcon,
      imgAlt: "log out icon",
      itemName: "Log out",
    },
  ];

  return (
    <div className="user-profile-widget">
      <div className="user-profile-widget__content">
        {dropdownItems.map((item) => (
          <button
            className="user-profile-widget__button"
            onClick={item.onClick}
            key={item.itemName}
          >
            <img
              className="user-profile-widget__icon"
              src={item.imgSrc}
              alt={item.imgAlt}
            />
            <span>{item.itemName}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserProfileWidget;
