import React from "react";
import { StarIcon } from "../../Icons/StarIcon";
import { FullStarIcon } from "../../Icons/FullStarIcon";
import styled, { css } from "styled-components";
import { PaletteCopyIcon } from "../../Icons/PaletteCopyIcon";
import { ExportIcon } from "../../Icons/ExportIcon";
import { InfoIcon } from "../../Icons/InfoIcon";
import { RateIcon } from "../../Icons/RateIcon";

export const Container = styled.div`
  background-color: none;
  border-radius: 8px;
  width: 80%;
  margin-right: 4%;
  height: calc(100svh - 260px);
  overflow: auto;  

  @media screen and (max-width: 900px) {
    width: 90%;
    margin: 0px 4% 0px 10px;
    height: calc(100svh - 240px);
  }

  @media screen and (max-width: 600px) {
    margin: 0px 4% 0px 2px;
  }

  @media screen and (max-height: 400px) {
    height: calc(100svh - 130px);
  }
`;

export const Loader = styled.div`
  position: absolute;
  display: none;
  top: 50%;
  left: 55%;
  z-index: 99;
  border: 12px solid #aaa; 
  border-top: 12px solid #3498db00;
  border-radius: 50%;
  width: 10vw;
  height: 10vw;
  animation: spin 2s linear infinite;

  @media screen and (max-width: 900px) {
    border: 10px solid #aaa; 
    border-top: 10px solid #3498db00;
    top: 35%;
    left: 48%;
  }

  @media screen and (max-width: 600px) {
    border: 8px solid #aaa; 
    border-top: 8px solid #3498db00;
    top: 45%;
    left: 50%;
  }

  @media screen and (max-height: 400px) {
    top: 45%;
    left: 55%;
  }

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;


export const MainPalette = styled.div`  
  border-radius: 8px;
  background-color: white;
  height: 410px;
  padding: 20px;
  margin-bottom: 20px;
  overflow: hidden;

  @media screen and (max-height: 400px) {
    zoom: 0.7;
  }

  &.dark {
    background-color: #000000;
  }

  @media screen and (max-width: 600px) {
    height: 260px; // Mobile edit display:none
    zoom: 0.7;
  }

  @media screen and (max-width: 400px) {
    height: 310px; // Mobile edit display:none
  }
`;

export const OtherPalettes = styled.div`
  height: auto;
  border-radius: 8px;
  margin-top: 0px;
  zoom: 0.9;
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }  

  @media screen and (max-width: 600px) {
    zoom: 0.7;
  }

  @media screen and (max-height: 400px) {
    zoom: 0.7;
  } 

`;


export const PaletteTitle = styled.h2`
  font-weight: 500;
  margin: 0px;
  color: #333333;

  &.dark {
    color: #eeeeee;

    ::selection {
      background: #333333;
      color: #eeeeee;
    }
  }

  @media screen and (max-width: 900px) {
    font-size: 22px;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }

  ::selection {
    background: #333333;
    color: #eeeeee;
  }

`;

export const Copy = styled.button`
  background: none;
  border: none;
  margin: 4px 0px 0px 4px;
  cursor: pointer;

  &:hover {
    > svg {
      fill: #aaaaaa;
  }

  &:active {
      > svg {
        fill: #888888;
      }
    }
`;

export const Lock = styled.button`
  background: none;
  border: none;
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
  height: 35%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  zoom: 0.9;

  @media screen and (max-width: 900px) {
    height: 25%;
    gap: 4px;
  }
`;

export const ColorBlindColors = styled.div`
    width: calc(50% - 50px);
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    height: 120px;

    &.choose {
      border: 1px dashed grey;
      background-color: #eeeeee;
      display: flex;
      align-items: center;
      justify-content: center;

      .chooseText {
        color: #555555;
        font-weight: 400;
        text-align: center;
        max-width: 300px;
        margin: 0;
      }
    }

    &.dark {
      background-color: #000000;
    }

    @media screen and (max-width: 900px) {
      width: auto;
      height: 150px;
    }  

  ${({ visible }) => {
        return css`
            visibility: ${visible ? 'visible' : 'none'};
            display: ${visible ? '' : 'none'};
        `;
  }}

  h2 {
    margin-bottom: 20px;
    font-size: 18px;

    @media screen and (max-width: 1200px) {
      font-size: 13px;
    }  

    @media screen and (max-width: 900px) {
      font-size: 16px;
      font-weight: 400;
    }  
  }
`;


export const MediumColors = styled(ColorBlindColors)`
  &.dark {
    background-color: #000000;
  }

  @media screen and (max-width: 900px) {
    width: auto;
    height: 150px;
  }  

`;

export const ColorBlindPalette = styled.div`
  height: 45%;
  margin: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
      height: 40%;
  }  

  @media screen and (max-width: 600px) {
    height: 35%;
  }
`;

export const Color = styled.div`
  background-color: ${(props) => props.colorHex};
  width: 19%;
  height: 100%;
  border-radius: 8px 8px 0px 0px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    height: 150%;

  }
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
  text-align: center;
  user-select: text;


  @media screen and (max-width: 900px) {
    font-size: 12px;

    p {
      max-width: 10px;
    }
    

  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
    flex-direction: column;
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

  @media screen and (max-width: 600px) {
    span {
      display: none;
    }
  }

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
  background-color: #ddd;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  z-index: 10;

  transition: opacity 0.25s;
  display: ${({ infoEnabled }) => (infoEnabled ? 'flex' : 'none')};
  opacity: ${({ infoEnabled }) => (infoEnabled ? '1' : '0')};
  
  @media screen and (max-width: 900px) {
    margin-left: 10px;
    zoom: 0.8;
  }

  &.dark {
    background-color: #666;
    color: white;
  }
`;

export const LogInNotify = styled.div`
  right: 0;
  max-width: 160px;
  margin-right: 60px;
  position: absolute;
  margin-top: 160px;
  padding: 10px;
  border-radius: 8px;
  background-color: #ddd;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  z-index: 10;

  transition: opacity 0.25s;
  display: flex;
  opacity: ${({ infoEnabled }) => (infoEnabled ? '1' : '0')};
  
  @media screen and (max-width: 900px) {
    margin-left: 10px;
    zoom: 0.8;
  }

  &.dark {
    background-color: #666;
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
  background-color: #ddd;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  transition: opacity 0.25s;
  display: ${({ rateEnabled }) => (rateEnabled ? 'flex' : 'none')};
  opacity: ${({ rateEnabled }) => (rateEnabled ? '1' : '0')};

  @media screen and (max-width: 900px) {
    margin-left: 10px;
    zoom: 0.8;
  }

  @media screen and (max-height: 500px) {
    zoom: 0.8;
  }

  &.dark {
    background-color: #666;

    p {
      color: white;
    }
  }

  #feedbackButton {
    :disabled {
      cursor: default;
      background-color: #888888 !important;
      color: #aaaaaa !important;
      &:hover {
        background-color: #888888 !important;
      }
    }

    &:hover {
      background-color: #555555 !important;
    }
  }

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
    background: #fff; /* Grey background */
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
  align-items: flex-start;

  div {
    width: 100%;
    display: ${({ rateEnabled }) => (rateEnabled ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;

    div {
      display: ${({ rateEnabled }) => (rateEnabled ? 'flex' : 'none')};
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
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      background-color: #fff;
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
        background-color: #444;
        cursor: pointer;
      }
    }
  }
  
`;


export const StyledStarIcon = styled(StarIcon)`
  margin: 0 18px;
  cursor: pointer;
  height: 22px;
  width: 22px;
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
`;

export const StyledFullStarIcon = styled(FullStarIcon)`
  margin: 0 18px;
  cursor: pointer;
  height: 22px;
  width: 22px;
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
`;

export const StyledExportIcon = styled(ExportIcon)`
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
`;

export const StyledPaletteCopyIcon = styled(PaletteCopyIcon)`
  cursor: pointer;
  fill: #333333;
  margin-right: 4px;
  height: 22px;
  width: 22px;

  &.dark {
    fill: #888888;
  }
  &:hover {
      fill: #666;
  }
`;


export const StyledInfoIcon = styled(InfoIcon)`
  margin: 2px -10px 0px 0px;
  cursor: pointer;
  path
    {
      fill: #333333;
    }
  &.dark {
    path
    {
      fill: #888888;
    }
  }
  &:hover {
    path
    {
      fill: #666666;
    }
  }
`;


export const StyledRateIcon = styled(RateIcon)`
  margin: 2px auto 0px 0px;
  cursor: pointer;
  path
    {
      fill: #333333;
    }
  &.dark {
    path
    {
      fill: #888888;
    }
  }

  &:hover {
    path
    {
      fill: #666666;
    }
  }
`;


export const LockDisplay = styled.div`
  cursor: pointer;
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
  font-size: 14px;

  @media screen and (max-width: 1200px) {
    font-size: 12px;
  }  

  @media screen and (max-width: 600px) {
    font-size: 6px;
    flex-direction: column;
    padding: 6px;
  }  

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  &:hover {
    background-color: #444444;
  }
`;

export const EditDisplay = styled.div`
  cursor: pointer;
  background-color: #eee;
  margin-top: 10px;
  border: 1px dashed #aaaaaa;
  position: relative;
  top: 105%;
  border-radius: 8px 8px 8px 8px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;

  ${({ visible }) => {
        return css`
            align-items: ${visible ? '' : 'center'}; 
            padding-top: ${visible ? '8px' : ''}; 
             min-height: ${visible ? '142px' : '150px'};;
        `;
    }}

  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  @media screen and (max-width: 600px) {
    display: none; // Mobile edit display:none
  }

  &:hover {
    background-color: #dddddd;
  }

  &.dark {
    border: 1px dashed grey;
    background-color: #333333;
    color: #eee;

    &:hover {
      background-color: #444444;
    }
  }
`;