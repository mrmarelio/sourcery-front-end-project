import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import SectionTitle from "components/sectionTitle";
import NavButtons from "components/NavButtons";
import RestaurantCard from "components/restaurantCard";
import { getRestaurantData } from "./endpoint";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "./similar-restaurants.scss";
import "swiper/swiper.scss";

SwiperCore.use([Navigation]);

const SimilarRestaurants = ({ mainRestaurantId, categories }) => {
  const [filledRestaurants, setFilledRestaurants] = useState([]);

  useEffect(() => {
    const fillRestaurantData = async () => {
      const restaurantData = await getRestaurantData();

      const similarRestaurants = [];
      restaurantData.forEach((restaurant) => {
        for (let i = 0; i < restaurant.categories.length; i++) {
          const category = restaurant.categories[i];

          if (
            categories?.includes(category) &&
            similarRestaurants?.findIndex(
              (similarRestaurant) => similarRestaurant.id === restaurant.id
            ) === -1 &&
            restaurant.id !== mainRestaurantId
          ) {
            similarRestaurants.push(restaurant);
          }
        }
        return similarRestaurants;
      });

      setFilledRestaurants(similarRestaurants);
    };

    fillRestaurantData();
  }, [categories, mainRestaurantId]);

  const disableBtn = filledRestaurants.length <= 3;

  return (
    <div className="similar-restaurants">
      <div className="similar-restaurants__top">
        <SectionTitle title="Also you could like" />
        <NavButtons disabledLeft={disableBtn} disabledRight={disableBtn} />
      </div>
      <Fragment>
        {filledRestaurants.length > 3 && (
          <Swiper
            spaceBetween={50}
            breakpoints={{
              1200: {
                slidesPerView: 3,
              },
              900: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
            slidesPerGroup={1}
            loop={true}
            className="mySwiper "
            navigation={{
              nextEl: ".nav-buttons__right-button",
              prevEl: ".nav-buttons__left-button",
            }}
          >
            {filledRestaurants.map((restaurant) => {
              return (
                <SwiperSlide key={restaurant.id}>
                  <RestaurantCard fullCard={true} restaurant={restaurant} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}

        <div className="similar-restaurants__grid">
          {filledRestaurants.length < 3 &&
            filledRestaurants.map((restaurant) => {
              return (
                <RestaurantCard
                  key={restaurant.id}
                  fullCard={true}
                  restaurant={restaurant}
                />
              );
            })}
        </div>
      </Fragment>
    </div>
  );
};

SimilarRestaurants.propTypes = {
  categories: PropTypes.array.isRequired,
  mainRestaurantId: PropTypes.string.isRequired,
};

export default SimilarRestaurants;
