import React, { useState, useEffect } from "react";
import { useAuth } from "features/userData";

import "./hello-widget.scss";

const HelloWidget = () => {
  const [timeState, setTimeState] = useState(new Date());
  const { userData } = useAuth();

  const userName = userData?.userName?.split(" ")[0];

  useEffect(() => {
    const interval = setInterval(() => setTimeState(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const getTimeOfDay = (h, min) => {
    const midnight = 0;
    const midday = 12 * 60;
    const evening = 18 * 60;
    const timeNow = h * 60 + Number(min);
    let timeOfDay;

    if (timeNow > midnight && timeNow < midday) {
      timeOfDay = "morning";
    } else if (timeNow >= midday && timeNow < evening) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "evening";
    }
    return timeOfDay;
  };

  const hours =
    timeState.getHours() < 10
      ? "0" + timeState.getHours()
      : timeState.getHours();
  const minutes =
    timeState.getMinutes() < 10
      ? "0" + timeState.getMinutes()
      : timeState.getMinutes();

  return (
    <div className="hello-widget">
      <div className="hello-widget__time">{`${hours}:${minutes}`}</div>
      <h1 className="hello-widget__greeting">
        {`Good ${getTimeOfDay(hours, minutes)},
         ${userName}!`}
      </h1>
    </div>
  );
};
export default HelloWidget;
