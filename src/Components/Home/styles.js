import styled from "styled-components";
import PatternBackground from "./../../images/pattern.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-image: url(${PatternBackground});
  height: 100vh;
  background-size: cover;
`;

export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  color: white;
  font-size: 38px;
`;
