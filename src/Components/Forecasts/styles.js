import styled from "styled-components";

export const City = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-item: center;
`;

export const Card = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: flex-end;
  padding: 20px 80px 20px 80px;
`;

export const CardItem = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  display: flex;
  color: black;
  font-size: 15px;

  width: ${props => (props.row ? "500px" : "")};
  align-items: center;
  justify-content: ${props => (props.row ? "space-evenly" : "center")};
  flex-direction: ${props => (props.row ? "row" : "column")};
  padding: 30px;
  border-radius: 8px;

  &:hover {
    ${props =>
      props.row ? "" : "box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2)"};
  }
`;

export const CardImg = styled.img`
  height: ${props => (props.row ? "180px" : "100px")};
  width: ${props => (props.row ? "180px" : "100px")};
`;

export const CardDesc = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;
