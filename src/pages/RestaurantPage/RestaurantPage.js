import React, { useEffect, useState } from "react";
import LocationMap from "components/LocationMap";
import InformationSection from "components/InformationSection";
import RestaurantHeader from "components/RestaurantHeader";
import SimilarRestaurants from "components/similarRestaurants";
import ReviewsSection from "components/ReviewsSection";
import { useParams } from "react-router";
import Breadcrumbs from "components/Breadcrumbs";
import "./restaurant-page.scss";

const RestaurantPage = () => {
  const restaurants_url =
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/restaurants.json";

  const [currentRestaurant, setCurrentRestaurant] = useState([]);

  const { handle } = useParams();

  useEffect(() => {
    const getRestaurantsData = async (url) => {
      const restaurantsResponse = await fetch(url);
      const restaurantsJson = await restaurantsResponse.json();
      const { restaurants } = restaurantsJson;

      const restaurantWithId = restaurants.filter(
        (restaurant) => restaurant.id === handle
      );
      setCurrentRestaurant(restaurantWithId);
    };
    getRestaurantsData(restaurants_url);
  }, [handle]);

  return (
    <div className="restaurant">
      <div className="restaurant__breadcrumbs">
        {currentRestaurant.map((restaurant) => (
          <Breadcrumbs key={restaurant.id} lastLevel={restaurant.name} />
        ))}
      </div>
      <div className="restaurant__header-wrapper">
        {currentRestaurant.map((restaurant) => (
          <RestaurantHeader
            key={restaurant.id}
            image={restaurant.image}
            name={restaurant.name}
            checkIns={restaurant.checkIns}
            reviews={restaurant.reviews}
            categories={restaurant.categories}
          />
        ))}
      </div>
      <div className="restaurant__mid-section">
        <div className="restaurant__information-wrapper">
          {currentRestaurant.map((restaurant) => (
            <InformationSection
              key={restaurant.id}
              address={restaurant.location.address}
              website={restaurant.website}
              phone={restaurant.phone}
              openingHours={restaurant.openingHours}
            />
          ))}
        </div>
        <div className="restaurant__location-wrapper">
          {currentRestaurant.map((restaurant) => (
            <LocationMap
              key={restaurant.id}
              name={restaurant.name}
              lat={restaurant.location.coordinates.lat}
              lng={restaurant.location.coordinates.lng}
            />
          ))}
        </div>
        <div className="restaurant__reviews-wrapper">
          {currentRestaurant.map((restaurant) => (
            <ReviewsSection key={restaurant.id} reviews={restaurant.reviews} />
          ))}
        </div>
      </div>
      <div className="restaurant__suggestions-wrapper">
        {currentRestaurant.map((restaurant) => (
          <SimilarRestaurants
            key={restaurant.id}
            mainRestaurantId={restaurant.id}
            categories={restaurant.categories}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
