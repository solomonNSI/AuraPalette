import React from "react";
import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 20%;
  //margin-top: 18px;
  margin-left: 4%;
  margin-right: 20px;
  color: #333333;
  font-weight: medium;
  overflow: auto;
  background-color: #dddddd;
  border-radius: 8px;
  padding: 20px;
  height: calc(100vh - 298px);

  &.dark {
    background-color: #333;
  }

  @media screen and (min-width: 900px) {
    display: unset !important;  
  }
  
  @media screen and (max-width: 900px) {
    position: absolute;
    left: calc(4% + 50px);
    width: 40%;
    border: 2px solid #aaaaaa;
    height: calc(100vh - 282px);
    z-index: 99;
    display: none;
    margin: 0px 4px 0px 0px;
  }
`;


export const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  line-height: 24px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media screen and (max-width: 900px) {
    margin-bottom: 8px;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }

  &.dark {
    color: #ccc;
  }

  @media only screen and (min-height: 1000px) {
    margin-bottom: 14px;
  }

  > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  // > input:checked ~ span {
  //   background-color: #fffff;
  // }

  > input:checked ~ span:after {
    display: block;
  }

  > span:after {
    top: 5px;
    left: 5px;
    width: 14px;
    height: 14px;
    border-radius: 2px;
    background: #333333;
  }
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  width: 24px;
  background-color: #ffffff;
  border-radius: 5px;

  &.dark {
    background-color: #bbbbbb;
  }

  &:after {
    content: "";
    position: absolute;
    display: none;
    
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  margin: 0px 0px 10px 0px;

  @media screen and (max-width: 900px) {
    font-size: 22px;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }

  &.dark {
    color: #eee;

    ::selection {
      background: #111;
      color: #eeeeee;
    }
  }

  @media only screen and (min-height: 1000px) {
    font-weight: 500;
    margin: 0px 0px 14px 0px;
  }

  ::selection {
    background: #333333;
    color: #eeeeee;
  }
`;

export const Subtitle = styled.h3`
  font-weight: 500;
  margin: 12px 0px 10px 0px;
  cursor: pointer;

  .arrow {
    margin-left: 8px;
    font-size: 16px;
  }

  &.dark {
    color: #ccc;
  }

  @media screen and (max-width: 900px) {
    font-size: 18px;
  }

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }

  @media only screen and (min-height: 1000px) {
    font-weight: 500;
    margin: 18px 0px 14px 0px;
  }
`;
