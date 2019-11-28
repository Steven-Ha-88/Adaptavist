import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Card, CardItem, CardImg, Day } from "./styles";
import { weatherImg } from "../../Utils/index";
const WeatherDetail = props => {
  const day = props.match.params.id;
  const list = useSelector(state => state.weather.forecast);
  const city = useSelector(state => state.weather.city);
  const filteredList = list.filter(item => item.dt_txt.match(`${day}`));

  const toCelcius = kel => {
    const temp = Math.round(kel - 273.15);
    return temp;
  };

  return (
    <>
      <Day>
        <h1>{city}</h1>
        <h2>{moment(day).format("dddd, MMMM Do")}</h2>
      </Day>
      <Card>
        {filteredList.map(item => {
          const icon = weatherImg(item);
          return (
            <CardItem key={item.dt}>
              <CardImg src={icon} alt="weather icon" />
              <h3>{item.dt_txt.slice(11, 16)}</h3>
              <p>{item.weather[0].description}</p>
              <p>Min temp: {toCelcius(item.main.temp_min)}°C</p>
              <p>Max temp: {toCelcius(item.main.temp_max)}°C</p>
              <p>Humidity: {item.main.humidity}</p>
            </CardItem>
          );
        })}
      </Card>
    </>
  );
};

export default WeatherDetail;
