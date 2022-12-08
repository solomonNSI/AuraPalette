import React from "react";
import styled from "styled-components";
import { StarIcon } from "../../Icons/StarIcon";

export const Container = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 100%;
  height: 15vh;
  border-radius: 0px;
`;

export const PaletteTitle = styled.h3`
  font-weight: 500;
  margin: 10px auto 15px 0px;
  color: #333333;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Colors = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
`;

export const Color = styled.div`
  background-color: red;
  width: 20%;
  height: 10vh;
  border-radius: 8px 8px 0px 0px;
  display: flex;
  flex-direction: column;
`;

export const ColorCode = styled.div`
  background-color: #333333;
  color: #ffffff;
  height: 40px;
  position: relative;
  top: 100%;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
`;

export const ColorModeButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #333333;
  border-radius: 8px;
  font-size: 12px;
  color: white;
  border: none;
  height: 20px;
`;

export const StyledStarIcon = styled(StarIcon)`
  margin: 0 12px;
`;
