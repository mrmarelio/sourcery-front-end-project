import React from "react";
import HelloWidget from "components/helloWidget";
import EatOutSection from "components/eatOutSection";
import NewsFeedSection from "components/newsFeedSection";
import ReservationSection from "components/reservationSection";
import WeatherWidget from "components/weatherWidget";
import "./dashboard.scss";

const Dashboard = () => (
  <div className="dashboard">
    <section className="dashboard__widgets">
      <HelloWidget />
      <WeatherWidget />
    </section>
    <ReservationSection />
    <EatOutSection />
    <NewsFeedSection />
  </div>
);

export default Dashboard;
