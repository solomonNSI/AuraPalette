import React from "react";
import styled from "styled-components";
import { ProfileIcon } from "../../Icons/ProfileIcon";

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
`;

export const GradientLine = styled.div`
  background: linear-gradient(
    90deg,
    ${props => props.colorList[0]} 0%,
    ${props => props.colorList[1]} 20.31%,
    ${props => props.colorList[2]} 45.83%,
    ${props => props.colorList[3]} 74.9%,
    ${props => props.colorList[4]} 100%
  );
  height: 5px;
  width: 100%;
  position: fixed;
  top: ${NAVBAR_HEIGHT}px; ;
`;

export const AppName = styled.div`
  font-size: 46px;
  margin-left: 65px;
  font-family: Palatino;
  font-weight: 700;
  letter-spacing: -0.05em;
  cursor: pointer;
`;

export const LoginButton = styled.div`
  margin-left: auto;
  margin-right: 65px;
`;

export const StyledProfileIcon = styled(ProfileIcon)`
  cursor: pointer;
`;
