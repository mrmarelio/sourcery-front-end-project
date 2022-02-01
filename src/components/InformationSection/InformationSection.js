import React from "react";
import PropTypes from "prop-types";
import shortenWebsiteLink from "utils/shortenWebsiteLink";

import { ReactComponent as MapPinIcon } from "assets/icons/map-pin.svg";
import { ReactComponent as GlobeIcon } from "assets/icons/globe.svg";
import { ReactComponent as PhoneIcon } from "assets/icons/phone.svg";
import { ReactComponent as ClockIcon } from "assets/icons/clock.svg";

import "./information-section.scss";

const InformationSection = ({ address, website, phone, openingHours }) => {
  return (
    <div className="information-section">
      <h2 className="h2-alt-font">Information</h2>
      <div className="information-section__field-holder">
        <div className="information-section__field">
          <div className="information-section__field-icon">
            <MapPinIcon />
          </div>
          <h3 className="information-section__field-title">Address</h3>
          <span className="information-section__field-value">{address}</span>
        </div>
        <div className="information-section__field">
          <div className="information-section__field-icon">
            <GlobeIcon />
          </div>
          <h3 className="information-section__field-title">Website</h3>
          <a href={website} className="information-section__field-value">
            {shortenWebsiteLink(website)}
          </a>
        </div>
        <div className="information-section__field">
          <div className="information-section__field-icon">
            <PhoneIcon />
          </div>
          <h3 className="information-section__field-title">Phone number</h3>
          <span className="information-section__field-value">{phone}</span>
        </div>
        <div className="information-section__field">
          <div className="information-section__field-icon">
            <ClockIcon />
          </div>
          <h3 className="information-section__field-title">Work hours</h3>
          <span className="information-section__field-value">
            {openingHours.map(({ days, hours }, i) => (
              <div className="opening-hours" key={i}>
                {days} {hours}
              </div>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

InformationSection.defaultProps = {
  address: "",
  website: "",
  phone: "",
  openingHours: [],
};

InformationSection.propTypes = {
  address: PropTypes.string,
  website: PropTypes.string,
  phone: PropTypes.string,
  openingHours: PropTypes.array,
};

export default InformationSection;
