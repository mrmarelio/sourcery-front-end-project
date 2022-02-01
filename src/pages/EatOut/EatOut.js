import NewPlacesSection from "components/newPlacesSection";
import React, { useState, useEffect } from "react";
import CategoriesSection from "components/categoriesSection";
import HeroSlider from "components/heroSlider";
import Breadcrumbs from "components/Breadcrumbs";
import NearPlacesSection from "components/nearPlacesSection";
import "./eatout.scss";

const EatOut = () => {
  const restaurants_url =
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/restaurants.json";

  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      const restaurantsResponse = await fetch(restaurants_url);
      const restaurantsJson = await restaurantsResponse.json();
      const { restaurants } = restaurantsJson;
      setRestaurants(restaurants);
      setIsLoading(false);
    };
    fetchAllData();
  }, []);

  return (
    <div className="eatout">
      <div className="eatout__breadcrumbs">
        <Breadcrumbs />
      </div>
      <h1 className="eatout__title">Hungry? Find the best place!</h1>
      <div className="eatout__wrapper">
        <HeroSlider restaurants={restaurants} isLoading={isLoading} />
      </div>
      <div className="eatout__wrapper">
        <CategoriesSection restaurants={restaurants} />
      </div>
      <NearPlacesSection restaurants={restaurants} />
      <NewPlacesSection restaurants={restaurants} />
      <div className="eatout__wrapper"></div>
      <div className="eatout__wrapper"></div>
      <div className="eatout__wrapper"></div>
    </div>
  );
};

export default EatOut;
