import React from "react";
import styled from "styled-components";
import { NAVBAR_HEIGHT } from "../../Components/NavBar/style";

export const AppBackground = styled.div`
  background-color: #eeeeee;
  overflow: hidden;
  height: 100svh;
  max-height: -webkit-fill-available;

  @supports (height: 100dvh) {
      max-height: calc(100svh);
      max-height: -webkit-fill-available;
  }

  &.dark {
    background-color: #222222;
  }
`;

export const CookieAlert = styled.div`
  position: absolute;
  bottom: 20px;
  height: 40px;
  width: 90%;
  background-color: #333333;
  left: 5%; 
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  z-index: 999;
  text-align: center;

  &.dark {
    background-color: #bbb;
    span {
      color: black;
    }
    
  }

  @media screen and (max-width: 900px) {
    font-size: 12px;
    button {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 600px) {
    span {
      margin: 0px 20px;
      font-size: 10px;
    }
    button {
      margin: 0px 20px;
      font-size: 11px;
    }
  }

  span {
    color: white;
    font-weight: 500;
    
  }

  button {
    border: none;
    font-weight: 500;
    background: none;
    color: #017aff;
    font-size: 17px;
    margin-left: 10px;
    cursor: pointer;

    &:hover {
      color:#23A8C9;
    }

    &:active {
      color:#2B98B3;
    }
  }

`;

export const Content = styled.div`
  background-color: #eeeeee;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  display: flex;
  flex-direction: column;
  width: calc(100%-130px);

  .errmsg {
    margin: 2px 4% 0 4%;
    width: 92%;
    font-size: 14px;
    /* color: red; */
    /* color: #6495ED; */
    color: #3690FF;

    @media screen and (max-width: 900px) {
      font-size: 10px;
    }

  }

  overflow: hidden;
  &.dark {
    background-color: #222222;
  }
`;

export const Container = styled.div`
  background-color: #eeeeee;
  height: 100vh;
  overflow: hidden;

  &.dark {
    background-color: #222222;
  }
`;

export const Title = styled.div`
  padding-top: ${NAVBAR_HEIGHT + 20}px;
  text-align: center;
  margin: 10px 65px 0px 65px;
  font-size: 32px;
  font-weight: 300;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;


  &.dark {
    color: #dddddd;

    ::selection {
      background: #eee;
      color: #333;
    }
  }

  @media screen and (max-height: 400px) {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    font-size: 28px;
  }

  @media screen and (max-width: 900px) {
    font-size: 22px;
  }

  @media screen and (max-width: 600px) {
    font-size: 18px;
    padding-top: 90px;
  }

  ::selection {
    background: #333333;
    color: #eeeeee;
  }
`;

export const Search = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  margin: 20px 4% 8px;
  height: 45px;

  @media screen and (max-height: 400px) {
    margin-top: 70px;
  }

  @media screen and (max-width: 900px) {
    height: 40px;
    font-size: 12px;
  }

`;

export const GenerateButton = styled.button`
  height: 45px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  margin: 0;
  padding: 0 15px;
  margin-left: 4px;
  background-color: #ddd; 
  cursor: pointer;

  &:hover {
    background-color: #aaa; 
  }

  &:active {
    background-color: #999; 
  }

  @media screen and (max-width: 900px) {
    height: 40px;
    font-size: 12px;
  }

  &.dark {
    background-color: #333;
    color: #fff;

    &:hover {
      background-color: #444; 
    }
  
    &:active {
      background-color: #555; 
    }
  }
`;

export const SearchBar = styled.input`
  height: 45px;
  width: 100%;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  margin: 0;
  margin-right: 4px;
  padding: 0;
  padding-left: 20px;
  border: 1px solid #ccc;


  @media screen and (max-width: 900px) {
    height: 40px;
    font-size: 12px;
  }

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }

  :focus {
    outline: 1px solid #88888888;
  }     

  &.dark {
    background-color: #000;
    color: #fff;
    border: 1px solid #444;

    
    ::placeholder {
      color: #666;
    }
  }


  &::placeholder {
    font-weight: 400;
    color: #33333388;

    @media screen and (max-height: 400px) {
      color: black;
      font-size: 16px;
    }
  }
`;

export const Bar = styled.div`
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
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  margin: 0 16px;
  font-weight: 300;
  display: flex;
  justify-content: center;
`;

export const PaletteContainer = styled.div`
  display: flex;
  height: 600px;
  margin-top: 10px;

  @media screen and (max-height: 400px) {
    margin-top: 10px;
  }

  @media screen and (max-width: 900px) {
    height: fit-content;
  }

 
`;

export const AdjustmentsClosed = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
    width: 50px;
    height: auto;
    margin: 0px 8px 0px 4%;
    background-color: #dddddd;
    border-radius: 8px;
    overflow: auto;
    height: calc(100svh - 240px);

    @media screen and (max-height: 400px) {
      height: calc(100svh - 130px);
    }

    div {
      width: 50px;
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 500;
      color: #111;
      justify-content: center;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      transform: rotate(180deg);
      @media screen and (max-width: 600px) {
        font-size: 16px;
      }
      @media screen and (max-height: 400px) {
        font-size: 14px;
      }
    }

    &.dark {
      background-color: #333;
      div {
        color: #ddd;
      }
      
    }
  }
  
`;
