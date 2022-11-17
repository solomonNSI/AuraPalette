import React from "react";
import styled from "styled-components";
import { StarIcon } from "../../Icons/StarIcon";

export const Container = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 80%;
  padding: 0 30px;
  margin-right: 65px;
`;

export const PaletteTitle = styled.h2`
  font-weight: 500;
  margin: 20px auto 15px 0px;
  color: #333333;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Colors = styled.div`
  height: 200px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
`;

export const Color = styled.div`
  background-color: #ae5353;
  width: 20%;
  height: 120%;
  border-radius: 8px 8px 0px 0px;
  display: flex;
  flex-direction: column;
`;

export const ColorCode = styled.div`
  background-color: #eeeeee;
  color: #333333;
  height: 50px;
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
  background-color: white;
  border-radius: 8px;
  padding: 4px;
  border: 3px solid #333333;
  font-size: 12px;
`;

export const StyledStarIcon = styled(StarIcon)`
  margin: 0 16px;
`;
