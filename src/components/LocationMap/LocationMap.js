import React from "react";
import PropTypes from "prop-types";
import { Loader } from "@googlemaps/js-api-loader";

import "./location-map.scss";

const LocationMap = ({ name, lat, lng }) => {
  if (lat === undefined || lng === undefined) {
    return null;
  } else {
    const loader = new Loader({
      apiKey: "AIzaSyD-5So8TL1mpXVTvzWvmVMhpMk4-7xebjg",
      version: "weekly",
    });
    loader.load().then(() => {
      const mapCoordinates = {
        lat: lat,
        lng: lng,
      };
      const map = new window.google.maps.Map(document.querySelector(".map"), {
        center: mapCoordinates,
        zoom: 16,
        mapId: "4969f7b18e23a2aa",
      });
      new window.google.maps.Marker({
        position: mapCoordinates,
        map,
        title: name,
      });
    });
    return (
      <div className="location-map">
        <h2 className="h2-alt-font">Location</h2>
        <div className="location-map__map-holder">
          <div className="map"></div>
        </div>
      </div>
    );
  }
};

LocationMap.defaultProps = {
  name: "",
};

LocationMap.propTypes = {
  name: PropTypes.string,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

export default LocationMap;
