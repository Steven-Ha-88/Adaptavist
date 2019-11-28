import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { Container, Card, CardItem, CardImg, City } from "./styles";
import icon from "./../../images/weather-icons/01d.svg";

const Forecasts = () => {
  const list = useSelector(state => state.weather.forecast);
  const city = useSelector(state => state.weather.city);
  const distinct = [...new Set(list.map(data => data.dt_txt.slice(0, 10)))];
  const convertDate = distinct.map(e => moment(e).format("dddd, MMMM Do"));
  const date = convertDate.map((value, index) => ({
    id: index + 1,
    dist: distinct[index], // same index to ref distinct array and length is same
    date: value
  }));

  // console.log(withId);
  console.log("date", date);

  return (
    <>
      <City>
        <h1>{city}</h1>
      </City>
      <Card>
        {date.map(item => {
          return (
            <Link
              to={`/forecast/${item.dist}`}
              style={{ textDecoration: "none" }}
              forecast={list}
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
