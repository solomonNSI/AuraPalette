import React from "react";
import styled from "styled-components";
import { StarIcon } from "../../Icons/StarIcon";

export const Container = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 80%;
  padding: 20px;
  margin-right: 65px;
  height: calc(100vh - 300px);
`;

export const PaletteTitle = styled.h2`
  font-weight: 500;
  margin: 0px auto 0px 0px;
  color: #333333;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const Colors = styled.div`
  height: 10vw;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
`;

export const Color = styled.div`
  background-color: ${(props) => props.colorHex};
  width: 20%;
  height: 120%;
  border-radius: 8px 8px 0px 0px;
  display: flex;
  flex-direction: column;
`;

export const ColorCode = styled.div`
  background-color: #333333;
  color: #eeeeee;
  height: 50px;
  position: relative;
  top: 100%;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  // box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
`;

export const ColorModeButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #333333;
  border-radius: 4px;
  font-size: 12px;
  color: white;
  border: none;
  height: 26px;
  padding: 0px 10px;
  margin-top: 3px;
`;

export const StyledStarIcon = styled(StarIcon)`
  margin: 0 16px;
`;
