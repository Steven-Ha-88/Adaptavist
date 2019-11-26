import React from "react";
import { Input, Container, Button, Form } from "./styles";

const SearchBar = props => {
  const { row } = props;
  return (
    <Container>
      <Form direction={row}>
        <Input placeholder="St. George, Utah" />
        <Button>Get Weather</Button>
      </Form>
    </Container>
  );
};

export default SearchBar;
