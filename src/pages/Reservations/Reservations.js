import React from "react";
import Breadcrumbs from "components/Breadcrumbs";
import ReservationSection from "components/reservationSection";
import "./reservations.scss";

const Reservations = () => (
  <div className="reservations">
    <div className="reservations__breadcrumbs">
      <Breadcrumbs />
    </div>
    <div className="reservations__different-reservations">
      <ReservationSection />
    </div>
  </div>
);

export default Reservations;
