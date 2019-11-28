import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Container, Button, Form, Error } from "./styles";
import { getData } from "./../../Actions/index";

const SearchBar = props => {
  const { row } = props;
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const error = useSelector(state => state.weather.error);

  const handleClick = e => {
    e.preventDefault();
    dispatch(getData(city));
  };

  return (
    <Container>
      <Form onSubmit={handleClick} row={row}>
        <Input
          onChange={e => setCity(e.target.value)}
          placeholder="St. George, Utah"
        />
        <Button>Get Weather</Button>
        {error ? <Error>{error}</Error> : null}
      </Form>
    </Container>
  );
};

export default SearchBar;
