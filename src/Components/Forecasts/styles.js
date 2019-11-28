import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: flex-end;
  height: 500px;
  padding: 20px 80px 20px 80px;
`;

export const Card = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  color: black;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
`;

export const CardImg = styled.img`
  height: 100px;
  width: 100px;
`;
