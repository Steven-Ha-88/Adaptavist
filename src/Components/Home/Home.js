import React from "react";
import SearchBar from "./../SearchBar/SearchBar";
import { Title, Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <Title>Enter a City and State</Title>
      <SearchBar />
    </Container>
  );
};

export default Home;
