import React from "react";
import styled from "styled-components";
import { NAVBAR_HEIGHT } from "./Components/NavBar/style";

export const Content = styled.div`
  background-color: #eeeeee;
  font-family: Helvetica Neue;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: calc(100%-130px);
`;

export const TopSearch = styled.p`
  font-family: Helvetica Neue;
  font-weight: 300;
`;

export const Title = styled.div`
  padding-top: ${NAVBAR_HEIGHT + 30}px;
  text-align: center;
  margin: 15px 65px 0px 65px;
  font-size: 36px;
  font-weight: 300;
`;

export const SearchBar = styled.input`
  margin: 30px 65px 0px 65px;
  height: 50px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const TopKeywords = styled.div`
  font-size: 15px;
  margin: 0px 65px 0px 65px;
  display: flex;
  align-items: center;
  jusfify-content: space-between;
  gap: calc(100vw / 35);
`;

export const PaletteContainer = styled.div`
  display: flex;
  height: 600px;
  margin-top: 20px;
`;
