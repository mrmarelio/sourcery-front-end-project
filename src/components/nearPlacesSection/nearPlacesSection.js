import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import * as geolib from "geolib";

import RestaurantCard from "components/restaurantCard";
import SectionHeading from "components/secondHeading";
import NavButtons from "components/NavButtons";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";
import "./near-places-section.scss";

SwiperCore.use([Navigation]);

const NearPlacesSection = ({ restaurants }) => {
  const [nearRestaurants, setNearRestaurants] = useState([]);
  const [location, setLocation] = useState();

  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  useEffect(() => {
    const { geolocation } = navigator;
    if (!geolocation) {
      return;
    }
    geolocation.getCurrentPosition(handleSuccess);
    return;
  }, []);

  const cancelLocationWatch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.clearWatch(1);
    }
  };

  useEffect(() => {
    if (location) {
      const closest = restaurants
        .map((restaurant) => {
          const coord = restaurant.location.coordinates;
          return {
            ...restaurant,
            dist: geolib.getDistance(location, coord),
          };
        })
        .sort((a, b) => a.dist - b.dist);
      setNearRestaurants(closest);
    }
    return cancelLocationWatch;
  }, [location, restaurants]);

  const disableBtn = nearRestaurants.length <= 3;

  return (
    <>
      <SectionHeading sectionName={"Discover near you"}>
        <NavButtons
          disabledLeft={disableBtn}
          disabledRight={disableBtn}
          classLeft="nearPlacesLeft"
          classRight="nearPlacesRight"
        />
      </SectionHeading>
      <div className="near-places-section">
        <Fragment>
          {nearRestaurants.length > 3 && (
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
                nextEl: ".nearPlacesRight",
                prevEl: ".nearPlacesLeft",
              }}
            >
              {nearRestaurants.map((restaurant) => {
                return (
                  <SwiperSlide key={restaurant.id}>
                    <RestaurantCard fullCard={true} restaurant={restaurant} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
          <div className="near-places-section__restaurants">
            {nearRestaurants.length < 3 &&
              nearRestaurants.map((restaurant) => {
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

NearPlacesSection.propTypes = {
  restaurants: PropTypes.array,
};

export default NearPlacesSection;
