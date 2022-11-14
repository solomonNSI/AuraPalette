import React from "react";
import styled from "styled-components";
import { NAVBAR_HEIGHT } from "./Components/NavBar/style";

export const Content = styled.div`
  font-family: Helvetica Neue;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 90vw;
`;

export const Title = styled.div`
  padding-top: ${NAVBAR_HEIGHT+30}px;
  text-align: center;
  margin-bottom: auto;
  font-size: 36px;
  font-weight: 300;
`;

export const SearchBar = styled.input`
  display: flex;
  margin: auto;
  margin-top: 30px;
  width: 100%;
  height: 40px;
  font-size: 16px;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const TopKeywords = styled.div`
  font-size: 16px;
  margin-top: 14px;
  text-align: left;
  display: flex;
  align-items: center;
`;

export const PaletteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  width: 90vw;
  height: 500px;
  margin-top: 20px;
`;