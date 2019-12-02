import React from "react";
import SearchBar from "../SearchBar";
import { Title, Container } from "./styles";

const Home = () => {
  return (
    <Container data-test="HomeComponent">
      <Title data-test="title">Enter a City and State</Title>
      <SearchBar data-test="search" />
    </Container>
  );
};

export default Home;
