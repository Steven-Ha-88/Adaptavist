import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Container, Button, Form } from "./styles";
import { getData } from "./../../Actions/index";

const SearchBar = props => {
  const { row } = props;
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(getData(city));
  };

  return (
    <Container>
      <Form onSubmit={handleClick} direction={row}>
        <Input
          onChange={e => setCity(e.target.value)}
          placeholder="St. George, Utah"
        />
        <Button>Get Weather</Button>
      </Form>
    </Container>
  );
};

export default SearchBar;
