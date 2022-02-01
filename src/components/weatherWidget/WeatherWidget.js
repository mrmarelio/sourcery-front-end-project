import React, { useEffect, useState } from "react";
import WindIcon from "assets/icons/weather-widget-icons/wind.svg";
import HumidityIcon from "assets/icons/weather-widget-icons/humidity.svg";
import SunIcon from "assets/icons/weather-widget-icons/sunny.svg";
import RainIcon from "assets/icons/weather-widget-icons/rainy.svg";
import CloudyIcon from "assets/icons/weather-widget-icons/cloudy.svg";
import SnowIcon from "assets/icons/weather-widget-icons/snow.svg";
import ThunderIcon from "assets/icons/weather-widget-icons/thunderstorm.svg";
import Divider from "assets/icons/weather-widget-icons/divider.svg";
import Loader from "../loader";
import "./weather-widget.scss";

const WeatherWidget = () => {
  const [isLoading, setIsLoading] = useState(false);

  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  const dayOfMonth = date.getDate();
  const dayOfWeek = date.getDay() || 7;

  const weather_url =
    "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/weather.json";

  const [weather, setWeather] = useState({
    weekDay: "",
    type: "",
    location: "",
    degreesInCelsius: "",
    wind: "",
    precipitation: "",
  });

  useEffect(() => {
    setIsLoading(true);

    const getWeather = async (url) => {
      const response = await fetch(url);
      const data = await response.json();

      setWeather(data.weather[dayOfWeek - 1]);
      setIsLoading(false);
    };
    getWeather(weather_url);
  }, [dayOfWeek]);

  const getWeatherIcon = (weatherType) => {
    let weatherIcon;
    switch (weatherType) {
      case "Cloudy":
        weatherIcon = CloudyIcon;
        break;
      case "Sunny":
        weatherIcon = SunIcon;
        break;
      case "Light shower":
        weatherIcon = RainIcon;
        break;
      case "Thunderstorm":
        weatherIcon = ThunderIcon;
        break;
      case "Snow":
        weatherIcon = SnowIcon;
        break;
      default:
        weatherIcon = ThunderIcon;
    }
    return weatherIcon;
  };

  const degrees = weather.degreesInCelsius.replace("+", "");

  if (isLoading) {
    return (
      <div className="weather-widget">
        <div className="weather-widget__main">
          <div className="weather-widget__loader">
            <Loader color="rgba(0, 0, 0, 0.25)" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="weather-widget">
      <div className="weather-widget__main">
        <div className="weather-widget__date-location">
          {`${weather.weekDay}, ${dayOfMonth} ${month} | ${weather.location}`}
        </div>

        <div className="weather-widget__temperature">{degrees}&deg;</div>
        <div className="weather-widget__weather">{weather.type}</div>
        <div className="weather-widget__divider weather-widget__divider--custom">
          <img src={Divider} alt="a dividing line" />
        </div>

        <div className="weather-widget__wind">
          <img
            className="weather-widget__wind-icon"
            src={WindIcon}
            alt="wind icon"
          />
          <div>{weather.wind}</div>
        </div>
        <div className="weather-widget__humidity">
          <img
            className="weather-widget__humidity-icon"
            src={HumidityIcon}
            alt="humidity icon"
          />
          <div>{weather.precipitation}</div>
        </div>
        <img
          className="weather-widget__weather-icon--small"
          src={getWeatherIcon(weather.type)}
          alt="weather type icon"
        />
      </div>
      <div
        className={`weather-widget__weather-icon ${
          weather.type === "Thunderstorm"
            ? "weather-widget__weather-icon-thunder"
            : ""
        }`}
      >
        <img src={getWeatherIcon(weather.type)} alt="weather type icon" />
      </div>
    </div>
  );
};

export default WeatherWidget;
