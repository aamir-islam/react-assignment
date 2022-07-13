import styled from "styled-components";

export const SeatMainDivStyle = styled.main`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SeatImgStyle = styled.img`
  width: 1082px;
  height: 129px;
  margin: 46px auto 75px auto;
`;
export const SeatTableStyle = styled.article`
  margin: 75px auto 304px auto;
`;
export const SeatStyle = styled.article`
  display: flex;
  justify-content: space-evenly;
`;
export const SeatRowStyle = styled.article`
  font-family: "Inter";
  font-style: normal;
  text-align: center;
  padding-right: 59px;
  padding-top: 20px;
  font-weight: 400;
  font-size: 48px;
`;

export const ListStyle = styled.ol`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  li {
    width: 23px;
    height: 58px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
  }
`;
export const SeatButtonStyle = styled.button`
  width: 190px;
  height: 43px;
  margin: 109 auto 152px auto;
  color: white;
  background-color: #352c9a;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin: 125px 450px 152px 450px;
`;

export const ModelScreenStyle = styled.article`
  background-color: #e5e5e5;
`;