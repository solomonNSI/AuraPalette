import React from "react";
import styled from "styled-components";
import { NAVBAR_HEIGHT } from "../../Components/NavBar/style";

export const AppBackground = styled.div`
  background-color: #eeeeee;
  height: 100vh;
  overflow: hidden;

  &.dark {
    background-color: #222222;
  }
`;

export const Content = styled.div`
  background-color: #eeeeee;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
  display: flex;
  flex-direction: column;
  width: calc(100%-130px);

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
  padding-top: ${NAVBAR_HEIGHT + 30}px;
  text-align: center;
  margin: 10px 65px 0px 65px;
  font-size: 36px;
  font-weight: 300;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;


  &.dark {
    color: #dddddd;

    ::selection {
      background: #eee;
      color: #333;
    }
  }

  @media screen and (max-width: 900px) {
    font-size: 24px;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
    padding-top: 90px;
  }

  ::selection {
    background: #333333;
    color: #eeeeee;
  }
`;

export const SearchBar = styled.input`
  position: relative;
  top: 0px;
  left: 0px;
  height: 50px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  padding-left: 20px;
  margin: 20px 4% 0px 4%;

  @media screen and (max-width: 900px) {
    height: 40px;
    font-size: 14px;

  }

  :focus {
    outline: 1px solid #88888888;
  }     

  &.dark {
    background-color: #111;
    color: #fff;
    
    ::placeholder {
      color: #666;
    }
  }


  &::placeholder {
    font-weight: 400;
    color: #33333388;
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
  margin-top: 20px;

  @media screen and (max-width: 900px) {
    height: fit-content;
  }

 
`;

export const Search = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 180px;
  right: 4.5%;
  display: none;

  > svg {
    fill: #666666;
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
    }

    &.dark {
      background-color: #333;
      div {
        color: #ddd;
      }
      
    }
  }
  
`;
