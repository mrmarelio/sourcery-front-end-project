import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";

import RestaurantCard from "components/restaurantCard";
import SectionHeading from "components/secondHeading";
import NavButtons from "components/NavButtons";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import "swiper/swiper.scss";
import "./new-places-section.scss";

SwiperCore.use([Navigation]);

const NewPlacesSection = ({ restaurants }) => {
  const [newReastaurants, setNewReastaurants] = useState([]);

  useEffect(() => {
    if (restaurants) setNewReastaurants(sortedRestaurants(restaurants));
  }, [restaurants]);

  const sortedRestaurants = (restaurants) => {
    return restaurants.sort(
      (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
    );
  };

  const disableBtn = newReastaurants.length <= 3;

  return (
    <>
      <SectionHeading sectionName={"New Places"}>
        <NavButtons
          disabledLeft={disableBtn}
          disabledRight={disableBtn}
          classLeft="newPlacesLeft"
          classRight="newPlacesRight"
        />
      </SectionHeading>
      <div className="new-places-section">
        <Fragment>
          {newReastaurants.length > 3 && (
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
              navigation={{
                nextEl: ".newPlacesRight",
                prevEl: ".newPlacesLeft",
              }}
            >
              {newReastaurants.map((restaurant) => {
                return (
                  <SwiperSlide key={restaurant.id}>
                    <RestaurantCard fullCard={true} restaurant={restaurant} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}

          <div className="new-places-section__restaurants">
            {newReastaurants.length < 3 &&
              newReastaurants.map((restaurant) => {
                return (
                  <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                    fullCard={true}
                    liked={false}
                  />
                );
              })}
          </div>
        </Fragment>
      </div>
    </>
  );
};

NewPlacesSection.propTypes = {
  restaurants: PropTypes.array,
};

export default NewPlacesSection;
