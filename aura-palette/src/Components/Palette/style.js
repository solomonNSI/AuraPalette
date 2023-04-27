import React from "react";
import { StarIcon } from "../../Icons/StarIcon";
import styled, { css } from "styled-components";
import { ExportIcon } from "../../Icons/ExportIcon";
import { InfoIcon } from "../../Icons/InfoIcon";
import { RateIcon } from "../../Icons/RateIcon";



export const Container = styled.div`
  background-color: none;
  border-radius: 8px;
  width: 80%;
  margin-right: 4%;
  height: calc(100vh - 260px);
  overflow: auto;

`;

export const InnerContainer = styled.div`
  height: 780px;
  overflow: hidden;

`;

export const MainPalette = styled.div`  
  border-radius: 8px;
  background-color: white;
  height: 480px;
  padding: 20px;
  margin-bottom: 20px;

  &.dark {
    background-color: #000000;
  }
`;

export const OtherPalettes = styled.div`
  height: auto;
  border-radius: 8px;
  margin-top: 0px;

  display: flex;
  flex-direction: row;
  gap: 20px;
  

`;


export const PaletteTitle = styled.h2`
  font-weight: 500;
  margin: 0px 0px 0px 0px;
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
  height: 9vw;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
`;

export const ColorBlindColors = styled.div`
    width: calc(50% - 50px);
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    height: 200px;

    &.dark {
      background-color: #000000;
    }

  ${({ visible }) => {
        return css`
            visibility: ${visible ? 'visible' : 'none'};
        `;
  }}

  h2 {
    margin-bottom: 20px;
    font-size: 18px;
  }
`;


export const MediumColors = styled(ColorBlindColors)`
  &.dark {
    background-color: #000000;
  }
`;

export const ColorBlindPalette = styled.div`
  height: 5vw;
  width: auto;
  margin: 0px;
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

export const Info = styled.div`
  position: absolute;
  margin-top: 160px;
  margin-left: 90px;
  height: 100px;
  width: 300px;
  padding: 10px;
  border-radius: 8px;
  background-color: #bbb;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  z-index: 10;

  &.dark {
    background-color: #444;
    color: white;
  }
`;


export const Rate = styled.div`
  position: absolute;
  margin-top: 300px;
  margin-left: 125px;
  z-index: 10;
  height: 240px;
  width: 300px;
  padding: 10px;
  border-radius: 8px;
  background-color: #bbb;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  .slidecontainer {
    width: 100%; /* Width of the outside container */
  }
  
  /* The slider itself */
  .slider {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 86%; /* Full-width */
    height: 16px; /* Specified height */
    border-radius: 4px;
    background: #eee; /* Grey background */
    outline: none; /* Remove outline */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;
  }
  
  /* Mouse-over effects */
  // .slider:hover {
  //   opacity: 1; /* Fully shown on mouse-over */
  // }
  
  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 28px; /* Set a specific slider handle width */
    height: 28px; /* Slider handle height */
    border-radius: 4px;
    background: #333; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }
  
  .slider::-moz-range-thumb {
    width: 28px; /* Set a specific slider handle width */
    border-radius: 4px;
    height: 28px; /* Slider handle height */
    background: #333; /* Green background */
    cursor: pointer; /* Cursor on hover */
  }

  &.dark {
    background-color: #444;
    color: white;
  }

  display: flex;
  align-items: flex-start;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      gap: 10px;
      margin: 10px 0 20px 0;

      p {
        margin: 0;
      }
    }

    p {
      font-size: 16px;
      font-weight: 500;
      color: #333;
      margin: 4px 0 10px 0;
    }

    textarea {
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
      background-color: #eeeeee;
      height: 80px;
      border-radius: 4px;
      width: 90%;
      border: none;
      font-size: 14px;
      padding: 4px 0px 4px 10px;
      margin-top: 16px;
      resize: none;

      :focus {
        outline: 2px solid #888888;
      } 
    }

    button {
      margin-top: 16px;
      width: 90%;
      border: none;
      border-radius: 4px;
      background-color: #333;
      color: #ddd;
      font-size: 16px;
      height: 30px;

      &:hover {
        background-color: #444444;
        cursor: pointer;
      }
    }
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

export const StyledInfoIcon = styled(InfoIcon)`
  margin: 2px -10px 0px 0px;
  cursor: pointer;
  &.dark {
    path
    {
      fill: #888888;
    }
  }
`;


export const StyledRateIcon = styled(RateIcon)`
  margin: 2px auto 0px 0px;
  cursor: pointer;
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