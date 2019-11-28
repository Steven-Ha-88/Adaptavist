import styled from "styled-components";

export const Container = styled.h1`
  display: flex;
  justify-content: center;
`;

export const Day = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: 100;
`;

export const Card = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: flex-end;
  height: 500px;
  padding: 20px 80px 20px 80px;
`;

export const CardItem = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  color: black;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  }
`;

export const CardImg = styled.img`
  height: 100px;
  width: 100px;
`;
