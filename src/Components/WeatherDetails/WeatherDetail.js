import React from "react";
import { useSelector } from "react-redux";

const WeatherDetail = props => {
  console.log("props", props);
  const day = props.match.params.id;
  const list = useSelector(state => state.weather.forecast);
  const filteredList = list.filter(item => item.dt_txt.match(`${day}`));
  console.log("weather list", filteredList);

  return <div>Weather Details</div>;
};

export default WeatherDetail;
