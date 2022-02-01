import React from "react";
import DashboardLogo from "assets/icons/nav-dashboard-logo.svg";
import ReservationsLogo from "assets/icons/nav-reservations-logo.svg";
import EatOutLogo from "assets/icons/nav-eat-out-logo.svg";
import NavigationItem from "./NavigationItem";
import "./navigation.scss";

const Navigation = () => {
  const navigationItems = [
    {
      link: "/",
      imgSrc: DashboardLogo,
      imgAlt: "dashboard logo",
      itemName: "Dashboard",
    },
    {
      link: "/reservations",
      imgSrc: ReservationsLogo,
      imgAlt: "reservations logo",
      itemName: "Reservations",
    },
    {
      link: "/eat-out",
      imgSrc: EatOutLogo,
      imgAlt: "eat out logo",
      itemName: "Eat Out",
    },
  ];

  return (
    <nav className="navigation">
      <ul className="navigation__items">
        {navigationItems.map((item) => (
          <NavigationItem
            key={item.link}
            link={item.link}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            itemName={item.itemName}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
