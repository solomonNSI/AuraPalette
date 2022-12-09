import React from "react";
import styled from "styled-components";
import { NAVBAR_HEIGHT } from "../../Components/NavBar/style";

export const Content = styled.div`
  background-color: #eeeeee;
  font-family: Helvetica Neue;
  display: flex;
  flex-direction: column;
  width: calc(100%-130px);
`;

export const Title = styled.div`
  padding-top: ${NAVBAR_HEIGHT + 30}px;
  text-align: center;
  margin: 0px 65px 0px 65px;
  font-size: 36px;
  font-weight: 300;
`;

export const SearchBar = styled.input`
  margin: 20px 65px 0px 65px;
  height: 50px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding-left: 20px;

  &::placeholder {
    font-weight: 400;
    color: #33333388;
  }
`;

export const TopKeywords = styled.div`
  width: 100%;
  margin: 20px 65px 10px 65px;
  display: flex;
  align-items: center;
  jusfify-content: center;
  width: 100%;
  display: none;
`;

export const TopSearch = styled.div`
  font-size: 14px;
  font-family: Helvetica Neue;
  margin: 0 16px;
  font-weight: 300;
  display: flex;
  justify-content: center;
`;

export const PaletteContainer = styled.div`
  display: flex;
  height: 600px;
  margin-top: 20px;
`;
