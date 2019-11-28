import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Container, Card, CardImg } from "./styles";
import icon from "./../../images/weather-icons/01d.svg";

const Forecasts = () => {
  const list = useSelector(state => state.weather.forecast);
  const distinct = [...new Set(list.map(data => data.dt_txt.slice(0, 10)))];
  const date = distinct.map(e => moment(e).format("dddd, MMMM Do"));

  return (
    <Container>
      {date.map(item => {
        console.log("date", date);
        return (
          <Card key={item}>
            <CardImg src={icon} alt="sun" />
            <h3>{item}</h3>
          </Card>
        );
      })}
    </Container>
  );
};

export default Forecasts;
