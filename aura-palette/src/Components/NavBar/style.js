import React from "react";
import styled from "styled-components";

export const NAVBAR_HEIGHT = 50;

export const NavBar = styled.div`
  background-color: white;
  color: black;
  height: ${NAVBAR_HEIGHT}px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
`;

export const AppName = styled.div`
  font-size: 46px;
  margin: 10px;
  margin-left: 64px;
  font-family: Palatino;
  font-weight: 700;
  letter-spacing: -0.05em;
`;

export const LoginButton = styled.div`
  font-size: 18px;
  margin: 10px;
  margin-left: auto;
  margin-right: 30px;
`;