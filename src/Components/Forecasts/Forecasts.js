import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
// import { filterByDay } from "./../../Actions/index";
import { Card, CardItem, CardImg, City } from "./styles";
import icon from "./../../images/weather-icons/01d.svg";

const Forecasts = () => {
  const list = useSelector(state => state.weather.forecast);
  const city = useSelector(state => state.weather.city);
  const loading = useSelector(state => state.weather.loading);
  const distinct = [...new Set(list.map(data => data.dt_txt.slice(0, 10)))];
  const convertDate = distinct.map(e => moment(e).format("dddd, MMMM Do"));
  const date = convertDate.map((value, index) => ({
    id: index + 1,
    dist: distinct[index], // same index to ref distinct array and length is same
    date: value
  }));

  return (
    <>
      <City>{loading ? <p>loading...</p> : <h1>{city}</h1>}</City>
      <Card>
        {date.map(item => {
          return (
            <Link
              to={`/forecast/${item.dist}`}
              style={{ textDecoration: "none" }}
              key={item.id}
            >
              <CardItem key={item.id}>
                <CardImg src={icon} alt="sun" />
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
