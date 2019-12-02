import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { SVG1d } from "./../../images/index";
import { Container, Card, CardItem, CardImg, Title, CardDesc } from "./styles";
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
    <Container data-test="Forecast Component">
      <Title data-test="title">
        {loading ? <h1>loading...</h1> : <h1>{city}</h1>}
      </Title>
      <Card data-test="card">
        <CardItem row data-test="card-item">
          <CardImg src={icon} row data-test="card-img" />
          <CardDesc data-test="card-desc">
            <p>{current.weather && current.weather[0].description}</p>
            <p>temp: {toCelcius(current.main && current.main.temp)}°C</p>
            <p>Humidity: {current.main && current.main.humidity}</p>
            <p>Pressure: {current.main && current.main.pressure}</p>
          </CardDesc>
        </CardItem>
      </Card>
      <Title data-test="title">
        <h1>Days</h1>
      </Title>
      <Card data-test="card">
        {date.map(item => {
          return (
            <Link
              to={`/forecast/${item.dist}`}
              style={{ textDecoration: "none" }}
              key={item.id}
            >
              <CardItem key={item.id} data-test="card-item">
                <CardImg src={SVG1d} alt="sun" data-test="card-img" />
                <h3>{item.date}</h3>
              </CardItem>
            </Link>
          );
        })}
      </Card>
    </Container>
  );
};

export default Forecasts;
