import React from "react";
import { Nav, Brand, Globalstyle } from "./styles";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => (
  <Nav data-test="header">
    <Globalstyle />
    <Brand data-test="logo"> My Weather App </Brand>
    <SearchBar row />
  </Nav>
);

export default Header;
