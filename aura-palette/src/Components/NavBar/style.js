import React from "react";
import styled from "styled-components";
import { ProfileIcon } from "../../Icons/ProfileIcon";
import { SunIcon } from "../../Icons/SunIcon";
import { MoonIcon } from "../../Icons/MoonIcon";



export const NAVBAR_HEIGHT = 65;

export const NavBar = styled.div`
  background-color: #dddddd;
  color: black;
  height: ${NAVBAR_HEIGHT}px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;

  &.dark {
    background-color: #333;
    color: #eee;
  }
`;

export const GradientLine = styled.div`
  background: linear-gradient(
    90deg,
    ${(props) => props.colorList[0]} 0%,
    ${(props) => props.colorList[1]} 20.31%,
    ${(props) => props.colorList[2]} 45.83%,
    ${(props) => props.colorList[3]} 74.9%,
    ${(props) => props.colorList[4]} 100%
  );
  height: 5px;
  width: 100%;
  position: fixed;
  top: ${NAVBAR_HEIGHT}px; ;
`;

export const AppName = styled.div`
  font-size: 46px;
  margin-left: 4%;
  font-family: Palatino;
  font-weight: 700;
  letter-spacing: -0.05em;
  cursor: pointer;
  
  @media screen and (max-width: 600px) {
    font-size: 38px;
  }
`;

export const LoginButton = styled.div`
  margin-left: auto;
  margin-right: 4%;
`;

export const StyledProfileIcon = styled(ProfileIcon)`
  cursor: pointer;

  &.dark {
    path
    {
      fill: #aaa;
    }

    rect
    {
      fill: #111;
    }
  }

  @media screen and (max-width: 600px) {
    width: 48px !important;
    height: 48px !important;
  }
`;

export const StyledMoonIcon = styled(MoonIcon)`
  cursor: pointer;
  margin-right: 10px;

  path
  {
    fill: #112366;
  }

  &.dark {
    display:none;
  }
  
`;

export const StyledSunIcon = styled(SunIcon)`
  margin-right: 10px;
  display: none;
  
  &.dark {
    display: inline;
    path
    {
      fill: #B79E79;
    }

    rect
    {
      fill: #111;
    }
  }
  
`;

export const DarkModeButton =  styled.button`
  height: 50px;
  width: 50px;
  background: url('Sun.png') no-repeat;
`;
