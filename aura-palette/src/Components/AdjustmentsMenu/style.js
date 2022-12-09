import React from "react";
import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 20%;
  //margin-top: 18px;
  margin-left: 65px;
  margin-right: 20px;
  color: #333333;
  font-weight: medium;
  overflow: scroll;
  background-color: #dddddd;
  border-radius: 8px;
  padding: 20px;
  height: calc(100vh - 320px);
`;

export const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  line-height: 24px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

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

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  margin: 0px 0px 16px 0px;
`;

export const Subtitle = styled.h3`
  font-weight: 500;
  margin: 16px 0px 16px 0px;
`;
