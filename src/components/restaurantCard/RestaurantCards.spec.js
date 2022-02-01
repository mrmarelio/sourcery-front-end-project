import React from "react";
import { render } from "@testing-library/react";
import RestaurantCard from "./restaurantCard";
import "@testing-library/jest-dom";

describe("RestaurantCard", () => {
  const restaurant = {
    name: "Grill London (Kaunas, PLC Mega)",
    id: "120wsdlpx4",
    slogan: "Best burgers in the town",
    createdDate: "2019-06-05",
    description:
      "„Grill London” is a chain of grill restaurants that visitors love because of its exceptional and responsible take on food quality. All of its steaks are grilled in unique ceramic grills using ecological fuels.",
    openingHours: [
      {
        days: "Monday - Friday",
        hours: "10:30 - 22:15",
      },
      {
        days: "Saturday - Sunday",
        hours: "11:00 - 23:00",
      },
    ],
    website: "http://grilllondon.lt",
    location: {
      address: "Islandijos pl. 32, Kaunas",
      coordinates: {
        lat: 54.94013552838086,
        lng: 23.891938359698315,
      },
    },
    phone: "+370 627 93122",
    image:
      "https://images.unsplash.com/photo-1498579485796-98be3abc076e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    checkIns: 8,
    reviews: [
      {
        userName: "Luke Skywalker",
        id: "730tybsl12",
        comment: "Tasty burgers, but had to wait a long line.",
        rating: 4,
      },
      {
        userName: "Uncle Roger",
        id: "10f836s0pw",
        comment: "Didn't have fried rice, a bit disappointed.",
        rating: 3.5,
      },
    ],
    categories: ["Burger", "Salads", "Grill"],
  };

  it("should render restaurant card when restaurants data is passed", () => {
    const { queryByTestId } = render(
      <RestaurantCard restaurant={restaurant} />
    );
    const element = queryByTestId("restaurantCard");
    expect(element).toBeInTheDocument();
  });

  it("should not render full restaurant card by default", () => {
    const { queryByTestId } = render(
      <RestaurantCard restaurant={restaurant} />
    );
    const element = queryByTestId("fullCard");
    expect(element).not.toBeInTheDocument();
  });

  it("should render full restaurant card by when fullCard prop is truthy", () => {
    const { queryByTestId } = render(
      <RestaurantCard restaurant={restaurant} fullCard={true} />
    );
    const element = queryByTestId("fullCard");
    expect(element).toBeInTheDocument();
  });

  it("should render check-in by default", () => {
    const { queryByTestId } = render(
      <RestaurantCard restaurant={restaurant} />
    );
    const element = queryByTestId("checkIn");
    expect(element).toBeInTheDocument();
  });

  it("should not render check-in when fullCard prop is truthy", () => {
    const { queryByTestId } = render(
      <RestaurantCard restaurant={restaurant} fullCard={true} />
    );
    const element = queryByTestId("checkIn");
    expect(element).not.toBeInTheDocument();
  });
});
