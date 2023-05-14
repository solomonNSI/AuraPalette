import React from "react";
import styled from "styled-components";
import { ProfileIcon } from "../../Icons/ProfileIcon";
import { SunIcon } from "../../Icons/SunIcon";
import { MoonIcon } from "../../Icons/MoonIcon";
import { FeedbackIcon } from "../../Icons/FeedbackIcon";

export const NAVBAR_HEIGHT = 60;

export const NavBar = styled.div`
  background-color: #dddddd;
  color: black;
  height: ${NAVBAR_HEIGHT}px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;

  @media screen and (max-height: 400px) {
    height: 52px;
  }

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

export const GradientLineDefault = styled.div`
  background: linear-gradient(90deg, rgba(255, 0, 0, 0.7) 7.81%, rgba(255, 153, 0, 0.7) 14.58%, rgba(255, 212, 0, 0.7) 31.27%, rgba(86, 196, 0, 0.7) 64.95%, rgba(0, 148, 255, 0.7) 87.36%, rgba(112, 0, 255, 0.7) 97.55%);
  height: 5px;
  width: 100%;
  position: fixed;
  top: ${NAVBAR_HEIGHT}px; ;
`;

export const AppName = styled.div`
  font-size: 40px;
  margin-left: 4%;
  font-family: Palatino;
  font-weight: 700;
  letter-spacing: -0.05em;
  cursor: pointer;

  &:hover {
    color: black;
    animation: colorAnimation 2s ease-in infinite;
  }

  @keyframes colorAnimation {
    0% { color: #F31F1F; }
    20% { color: #F38A27; }
    40% { color: #DDBF24; }
    60% { color: #52D635; }
    80% { color: #3AA5CF; }
    90% { color: #9C5FEF; }
    100% { color: #C21FBB; }
  }
  
  @media screen and (max-width: 600px) {
    font-size: 38px;
  }
`;

export const LoginButton = styled.div`
  margin-left: auto;
  margin-right: 4%;
  display: flex;
  align-items: center;
  gap: 10px;

`;

export const StyledProfileIcon = styled(ProfileIcon)`
  cursor: pointer;

  &:hover {
    rect
    {
      fill: #999;
    }
  }

  &.dark {
    path
    {
      fill: #aaa;
    }

    rect
    {
      fill: #111;
    }

    &:hover {
      rect
      {
        fill: #222;
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 48px !important;
    height: 48px !important;
  }
`;

export const StyledFeedbackIcon = styled.div`
  height: 46px;
  border-radius: 3px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  background-color: #bbb;
  margin: auto;
  cursor: pointer;

  &:hover {
    rect
    {
      fill: #999;
    }
  }
  
  &.dark {
    background-color: #111;
    path
    {
      fill: #aaa;
    }

    rect
    {
      fill: #111;
    }

    &:hover {
      rect
      {
        fill: #222;
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 48px !important;
    height: 48px !important;
  }
`;

export const StyledMoonIcon = styled(MoonIcon)`
  cursor: pointer;

  &:hover {
    rect
    {
      fill: #999;
    }
  }

  path
  {
    fill: #112366;
  }

  &.dark {
    display:none;

    &:hover {
      rect
      {
        fill: #222;
      }
    }
  }
  
`;

export const StyledSunIcon = styled(SunIcon)`
  display: none;
  cursor: pointer;

  &:hover {
    rect
    {
      fill: #999;
    }
  }
  
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

    &:hover {
      rect
      {
        fill: #222;
      }
    }
  }
  
`;

export const DarkModeButton =  styled.button`
  height: 50px;
  width: 50px;
  background: url('Sun.png') no-repeat;
`;

export const FeedbackButton = styled.div`
  display: flex;
  align-items: center;

  .feedback-button-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: #42a5f5;
    color: #ffffff;
    font-weight: bold;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .feedback-button-link:hover {
    background-color: #1e88e5;
  }
`;

