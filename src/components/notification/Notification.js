import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import SuccessIcon from "assets/icons/notification-icons/success-icon.svg";
import InfoIcon from "assets/icons/notification-icons/info-icon.svg";
import ErrorIcon from "assets/icons/notification-icons/error-icon.svg";
import CloseIconDark from "assets/icons/notification-icons/close-dark-icon.svg";
import CloseIconWhite from "assets/icons/notification-icons/close-white-icon.svg";
import "./notification.scss";

const notificationType = {
  success: {
    notificationIcon: SuccessIcon,
    closeNotificationIcon: CloseIconDark,
    notificationClassName: "notification--success",
  },
  info: {
    notificationIcon: InfoIcon,
    closeNotificationIcon: CloseIconDark,
    notificationClassName: "notification--info",
  },
  warning: {
    notificationIcon: InfoIcon,
    closeNotificationIcon: CloseIconDark,
    notificationClassName: "notification--warning",
  },
  error: {
    notificationIcon: ErrorIcon,
    closeNotificationIcon: CloseIconWhite,
    notificationClassName: "notification--error",
  },
};

const Notification = ({ type, text, hideable, fullWidth }) => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  const closeNotification = () => setIsDisplayed(false);

  const icon = notificationType[type].notificationIcon;
  const classname = notificationType[type].notificationClassName;
  const closeIcon = notificationType[type].closeNotificationIcon;

  return (
    isDisplayed && (
      <div
        className={classNames("notification", classname, {
          "notification--full-width": fullWidth,
        })}
      >
        <img src={icon} alt="" />
        <span className="notification__text">{text}</span>
        {hideable && (
          <button className="notification__button" onClick={closeNotification}>
            <img src={closeIcon} alt="" />
          </button>
        )}
      </div>
    )
  );
};

Notification.defaultProps = {
  hideable: true,
  fullWidth: false,
};

Notification.propTypes = {
  type: PropTypes.oneOf(Object.keys(notificationType)).isRequired,
  text: PropTypes.string.isRequired,
  hideable: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

export default Notification;
