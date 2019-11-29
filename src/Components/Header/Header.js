import React from "react";
import { Link } from "react-router-dom";
import { Nav, Brand, Globalstyle } from "./styles";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <Nav data-test="header">
      <Globalstyle />
      <Link to="/" style={{ textDecoration: "none" }}>
        <Brand data-test="logo"> My Weather App </Brand>
      </Link>
      <SearchBar row />
    </Nav>
  );
};

export default Header;
