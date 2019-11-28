import styled, { createGlobalStyle } from "styled-components";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: rgb(250, 105, 77);
`;

export const Brand = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: white;
  margin-left: 10px;
  font-size: 30px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const Globalstyle = createGlobalStyle`
  body {
   margin: 0; 
  }
`;
