import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { SVG1d } from "./../../images/index";
import { Card, CardItem, CardImg, City, CardDesc } from "./styles";
import { toCelcius, weatherImg } from "./../../Utils";

const Forecasts = () => {
  const list = useSelector(state => state.weather.forecast);
  const city = useSelector(state => state.weather.city);
  const current = useSelector(state => state.weather.current);
  const loading = useSelector(state => state.weather.loading);

  const distinct = [...new Set(list.map(data => data.dt_txt.slice(0, 10)))];
  const convertDate = distinct.map(e => moment(e).format("dddd, MMMM Do"));
  const date = convertDate.map((value, index) => ({
    id: index + 1,
    dist: distinct[index], // same index to ref distinct array and length is same
    date: value
  }));

  const icon = weatherImg(current.weather && current.weather[0].icon);

  return (
    <>
      <City>{loading ? <h1>loading...</h1> : <h1>{city}</h1>}</City>
      <Card>
        <CardItem row>
          <CardImg src={icon} row />
          <CardDesc>
            <p>{current.weather && current.weather[0].description}</p>
            <p>temp: {toCelcius(current.main && current.main.temp)}°C</p>
            <p>Humidity: {current.main && current.main.humidity}</p>
            <p>Pressure: {current.main && current.main.pressure}</p>
          </CardDesc>
        </CardItem>
      </Card>
      <City>
        <h1>Days</h1>
      </City>
      <Card>
        {date.map(item => {
          return (
            <Link
              to={`/forecast/${item.dist}`}
              style={{ textDecoration: "none" }}
              key={item.id}
            >
              <CardItem key={item.id}>
                <CardImg src={SVG1d} alt="sun" />
                <h3>{item.date}</h3>
              </CardItem>
            </Link>
          );
        })}
      </Card>
    </>
  );
};

export default Forecasts;
