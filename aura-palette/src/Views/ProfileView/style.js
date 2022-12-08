import React from "react";
import styled from "styled-components";
import { NAVBAR_HEIGHT } from "../../Components/NavBar/style";

export const History = styled.div`
  width: 50%;
  height: auto;
  background-color: #fff;
  margin: 85px 15px 50px 65px;
  border-radius: 8px;
  padding: 20px;
  overflow: scroll;
`;

export const Favorites = styled.div`
  width: 50%;
  background-color: #fff;
  margin: 85px 50px 50px 15px;
  border-radius: 8px;
  padding: 20px;
  overflow: scroll;
`;

export const Palettes = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  gap: 60px;
`;

export const Title = styled.h2`
  font-weight: 500;
  margin: 0px 0px 15px 0px;
  color: #333333;
`;

export const Subtitle = styled.h3`
  font-weight: 500;
  margin: 16px 0px 15px 0px;
  color: #333333;
  align-self: center;
`;
