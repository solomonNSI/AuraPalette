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
    #ae5353 0%,
    #9f420d 20.31%,
    #870000 45.83%,
    #b5a200 74.9%,
    #b5b152 100%
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
`;

export const LoginButton = styled.div`
  margin-left: auto;
  margin-right: 65px;
`;

export const StyledProfileIcon = styled(ProfileIcon)``;
