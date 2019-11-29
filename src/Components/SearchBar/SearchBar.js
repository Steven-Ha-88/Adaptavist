import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Container, Button, Form } from "./styles";
import { getData, getCurrentWeather } from "./../../Actions/index";

const SearchBar = props => {
  const { row } = props;
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const error = useSelector(state => state.weather.error);

  const handleClick = e => {
    e.preventDefault();
    dispatch(getData(city));
    dispatch(getCurrentWeather(city));
    setCity("");
  };

  return (
    <Container>
      <Form onSubmit={handleClick} row={row}>
        <Input
          onChange={e => setCity(e.target.value)}
          placeholder={`${error ? error : "St. George, Utah"}`}
          value={city}
          err={error}
        />
        {/* {error ? <Error>{error}</Error> : null} */}
        <Button>Get Weather</Button>
      </Form>
    </Container>
  );
};

export default SearchBar;
