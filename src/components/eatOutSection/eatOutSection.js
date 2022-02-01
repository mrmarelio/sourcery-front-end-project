import React, { useState, useEffect } from "react";
import BrowseRestaurantsWidget from "components/browseRestaurantsWidget/browseRestaurantsWidget";
import RestaurantCard from "components/restaurantCard";
import { useAuth } from "features/userData";

import "./eat-out-section.scss";

const EatOutSection = () => {
  const restaurants_url =
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/restaurants.json";

  const [userLikedReastaurants, setUserLikedReastaurants] = useState([]);
  const { userData } = useAuth();

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // fetch restaurants data
        const restaurantsResponse = await fetch(restaurants_url);
        const restaurantsJson = await restaurantsResponse.json();
        const restaurants = restaurantsJson.restaurants;

        const likedRestaurantsIDs = userData.liked.restaurants;
        const likedRestaurantsIDsArray = likedRestaurantsIDs.map(
          ({ id }) => id
        );
        const likedRestaurants = restaurants.filter((restaurant) =>
          likedRestaurantsIDsArray.includes(restaurant.id)
        );
        setUserLikedReastaurants(likedRestaurants);
      } catch (error) {
        // console.log("error", error);
      }
    };
    fetchAllData();
  }, [userData]);

  return (
    <div className="eat-out-section">
      <BrowseRestaurantsWidget />
      {userLikedReastaurants.slice(0, 2).map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          liked={true}
        />
      ))}
    </div>
  );
};

export default EatOutSection;
