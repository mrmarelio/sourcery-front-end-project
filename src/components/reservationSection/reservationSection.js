import React from "react";
import MeetingRoom from "assets/icons/reservations-meeting-room.svg";
import Books from "assets/icons/reservations-book.svg";
import Devices from "assets/icons/reservations-devices.svg";
import { useAuth } from "features/userData";

import "./reservation-section.scss";

const ReservationSection = () => {
  const { userData } = useAuth();

  const reservations = userData?.reservations;

  const books = reservations?.books || 0;
  const rooms = reservations?.rooms || 0;
  const devices = reservations?.devices || 0;

  return (
    <div className="reservation">
      <h2 className="h2-alt-font reservation-header">Reservations</h2>
      <div className="reservation-items">
        <a
          href="/reservations/rooms"
          className="reservation-items-left reservation__link"
        >
          <h2 className="h2-alt-font reservation-header-room">Meeting rooms</h2>
          <p className="caption reservation-caption">
            {rooms.length} Reserved{" "}
          </p>
          <img src={MeetingRoom} alt=" " />
        </a>
        <a
          href="/reservations/books"
          className="reservation-items-middle reservation__link"
        >
          <h2 className="h2-alt-font reservation-header-room">Books</h2>
          <p className="caption reservation-caption">{books.length} Reserved</p>
          <img src={Books} alt=" " />
        </a>
        <a
          href="/reservations/devices"
          className="reservation-items-right reservation__link"
        >
          <h2 className="h2-alt-font reservation-header-room">Devices</h2>
          <p className="caption reservation-caption">
            {devices.length} Reserved
          </p>
          <img src={Devices} alt=" " />
        </a>
      </div>
    </div>
  );
};

export default ReservationSection;
