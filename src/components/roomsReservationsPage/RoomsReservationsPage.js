import React, { useState, useEffect } from "react";
import { getRoomsFiltersData } from "./endpoint";
import ReservationsFilters from "components/reservationsFilters";
import ReservationsSearch from "components/reservationsSearch";
import Breadcrumbs from "components/Breadcrumbs";
import ConfusedTravolta from "assets/confused-travolta.gif";
import "./rooms-reservations-page.scss";

const RoomsReservationsPage = () => {
  const [types, setTypes] = useState([]);
  const [features, setFeatures] = useState([]);

  const name = {
    types: "TYPE",
    features: "FEATURES",
  };

  useEffect(() => {
    const fillData = async () => {
      const deviceFiltersData = await getRoomsFiltersData();
      setTypes(deviceFiltersData.type);
      setFeatures(deviceFiltersData.features);
    };
    fillData();
  }, []);

  return (
    <div className="rooms-reservations-page">
      <div className="rooms-reservations-page__breadcrumbs">
        <Breadcrumbs lastLevel="Rooms" />
      </div>
      <div className="rooms-reservations-page__search">
        <ReservationsSearch reservationsType="Room" />
      </div>
      <div className="rooms-reservations-page__filters-and-center">
        <div className="rooms-reservations-page__filters">
          <ReservationsFilters filterName={name.types} filterItems={types} />
          <ReservationsFilters
            filterName={name.features}
            filterItems={features}
          />
        </div>
        <div className="rooms-reservations-page__center">
          <img
            className="rooms-reservations-page__center-image"
            src={ConfusedTravolta}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default RoomsReservationsPage;
