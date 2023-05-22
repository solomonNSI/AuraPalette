import React from "react";
import styled from "styled-components";
import { ExportIcon } from "../../Icons/ExportIcon";
import { StarIcon } from "../../Icons/StarIcon";

export const Container = styled.div`
  background-color: none;
  border-radius: 8px;
  width: 100%;
  height: auto;
  border-radius: 0px;
  padding-bottom: 60px;
  margin-bottom: 10px;
  border-bottom: 1px solid #cccccc;

  @media screen and (max-width: 900px) {
    padding-bottom: 40px;

  }
`;

export const Titles = styled.div`
  display: flex;
  flex-direction:column;
`;

export const PaletteSettings = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
`;

export const PaletteTitle = styled.h3`
  font-weight: 500;
  margin: 10px auto 10px 0px;
  color: #333333;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }

  &.dark {
    color: #eeeeee;
  }
`;

export const Date = styled.h3`
  font-weight: 500;
  margin: 5px auto 20px 0px;
  color: #666666;
  font-size: 14px;

  @media screen and (max-width: 900px) {
    font-size: 12px;
  }

  &.dark {
    color: #cccccc;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction:row;
  justify-content: space-between;
`;

export const Colors = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    gap: 5px;
  }
`;

export const Color = styled.div`
  background-color: ${(props) => props.colorHex};
  width: 20%;
  height: 10vw;
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
  user-select: text;
  
  @media screen and (max-width: 900px) {
    height: 30px;
    font-size: 14px;
  }

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
  
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
display: none;

&:hover {
  cursor: pointer;
  background-color: #444444;
}

&:active {
  cursor: pointer;
  background-color: #333333;
}
`;

export const StyledStarIcon = styled(StarIcon)`
  margin-right: 4px;
  cursor: pointer;
  &.dark {
    path
    {
      fill: #888888;
    }
  }
  &:hover {
    path
    {
      fill: #666;
    }
  }

  @media screen and (max-width: 600px) {
    margin: 0 12px;
  }
`;

export const StyledExportIcon = styled(ExportIcon)`
  &.dark {
    path
    {
      fill: #888888;
    }
  }
`;
