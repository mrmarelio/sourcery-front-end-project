import React, { useState, useEffect } from "react";
import RestaurantCard from "components/restaurantCard";
import { useParams } from "react-router-dom";
import Notification from "components/notification";
import Breadcrumbs from "components/Breadcrumbs";
import "./category.scss";

const CategoryPage = () => {
  const restaurantsUrl =
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/restaurants.json";

  const { category } = useParams();

  const [categoryRestaurants, setCategoryRestaurants] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const restaurantsResponse = await fetch(restaurantsUrl);
        const restaurantsJson = await restaurantsResponse.json();
        const { restaurants } = restaurantsJson;

        const categoryRestaurants = restaurants.filter((restaurant) =>
          restaurant.categories
            .map((category) => category.toLowerCase())
            .includes(category.toLowerCase())
        );

        setCategoryName(category);
        setCategoryRestaurants(categoryRestaurants);
        setIsLoading(false);
      } catch (error) {
        // show fetch error message
      }
    };

    fetchData();
  }, [category]);

  const isNotificationVisible =
    isLoading === false && categoryRestaurants.length === 0;

  return (
    <div className="category">
      <div className="category__breadcrumbs">
        <Breadcrumbs lastLevel={categoryName} />
      </div>
      <h1 className="h1-font category__header">
        The best places for {categoryName.toUpperCase()}!
      </h1>
      <div className="category-restaurants">
        {isNotificationVisible && (
          <Notification
            type="info"
            text={`No restaurants found in ${categoryName} category.`}
          />
        )}
        {categoryRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              fullCard={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
