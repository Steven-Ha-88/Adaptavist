import React from "react";
import { Link } from "react-router-dom";
import { Nav, Brand, Globalstyle } from "./styles";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <Nav data-test="header">
      <Globalstyle />
      <Link to="/" style={{ textDecoration: "none" }}>
        <Brand data-test="logo"> My Weather App </Brand>
      </Link>
      <SearchBar data-test="search" row />
    </Nav>
  );
};

export default Header;
