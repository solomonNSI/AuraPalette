import React from "react";
import { StarIcon } from "../../Icons/StarIcon";
import styled, { css } from "styled-components";
import { ExportIcon } from "../../Icons/ExportIcon";

export const Container = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 80%;
  padding: 20px;
  margin-right: 4%;
  height: calc(100vh - 300px);
  overflow: scroll;

  &.dark {
    background-color: #000000;
  }
`;

export const PaletteTitle = styled.h2`
  font-weight: 500;
  margin: 0px auto 0px 0px;
  color: #333333;

  &.dark {
    color: #eeeeee;
  }
`;

export const Copy = styled.button`
  background: none;
  border: none;
  margin: 4px 0px 0px 4px;
  cursor: pointer;

  &:active {
      > svg {
        fill: #888888;
      }
    }
`;

export const Lock = styled.button`
  background: none;
  border: none;
  margin: 4px 0px 0px 4px;
  cursor: pointer;

  &:active {
      > svg {
        fill: #888888;
      }
    }
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

export const ColorBlindColors = styled.div`
  margin-top: 100px;
  height: 10vw;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;

  ${({ visible }) => {
        return css`
            visibility: ${visible ? 'visible' : 'hidden'};
        `;
    }}
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
  padding: 5px 0px;
  position: relative;
  top: 100%;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  @media only screen and (min-width: 1250px) {
    font-size: 16px;
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
  margin: 0 16px;
  
  &.dark {
    path
    {
      fill: #888888;
    }
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


export const LockDisplay = styled.div`
  background-color: #333333;
  color: #eeeeee;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 105%;
  border-radius: 8px 8px 8px 8px;
  padding: 2px 0px;
`;