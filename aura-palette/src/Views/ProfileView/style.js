import React from "react";
import styled from "styled-components";

export const AppBackground = styled.div`
  background-color: #eeeeee;
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: center;

  &.dark {
    background-color: #222222;
  }
`;

export const Settings = styled.div`
  width: 25%;
  height: auto;
  margin: 85px 10px 20px 4%;
  background-color: #ddd;
  border-radius: 8px;
  padding: 20px;
  overflow: scroll;
  display: flex;
  flex-direction: column;

  &.dark {
    background-color: #333;
  }
`;

export const Button = styled.button`
  width: 25%;
  height: auto;
  width: 100%;
  margin: 10px 0px;
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  overflow: scroll;
  border: none;
  font-size: 18px;
  font-weight: 500;
  color: #333333;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif;
  text-align: left;

  &.dark {
    background-color: #333;
    color: #eeeeee;

    &:hover {
      cursor: pointer;
      background-color: #222222 !important;
    }
  }

  .text {
    font-size: 14px;
    margin-top: 8px;
    font-weight: 300;
    text-align: left;
  }

  &:hover {
    cursor: pointer;
    background-color: #b8b8b8 !important;
  }
`;

export const SettingsBackground = styled.div`
  width: 75%;
  background-color: #fff;
  margin: 85px 4% 20px 10px;
  border-radius: 8px;
  padding: 20px;
  overflow: scroll;

  &.dark {
    background-color: #111111;
  }
`;

export const SettingsForeground = styled.div`
  overflow: scroll;
`;

export const Palettes = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
`;

export const Title = styled.h2`
  font-weight: 500;
  margin: 0px 0px 15px 0px;
  color: #333333;

  &.dark {
    color: #eeeeee;
  }
`;

export const Subtitle = styled.h3`
  font-weight: 500;
  margin: 0px auto 0px 0px;
  color: #333333;
  font-size: 18px;

  &.dark {
    color: #eeeeee;
  }
`;

export const Explanation = styled.h3`
  font-weight: 500;
  margin: 5px auto 0px 0px;
  color: #666666;
  font-size: 14px;

  &.dark {
    color: #ccc;
  }
`;

export const CheckboxLine = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  padding: 0px 20px;
  justify-content: space-between;
  margin: 25px 0px 0px;
  padding: 18px;
  background-color: #eee;
  border-radius: 4px;

  &.dark {
    background-color: #333;
  }
`;


export const SettingsLine = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  padding: 0px 20px;
  justify-content: space-between;
  margin: 25px 0px 0px;
  padding: 18px;
  background-color: #eee;
  border-radius: 4px;

  &.dark {
    background-color: #333;
  }

  input {
  position: relative;
  top: 0px;
  left: 0px;
  height: 40px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  padding-left: 12px;
  width: 65%;

  :focus {
    outline: 2px solid #888888;
  }   

  &.dark {
    background-color: #111;
    color: #fff;

    &::placeholder {
      color: #dddddd;
    }
  }

    &::placeholder {
      font-weight: 400;
      color: #33333388;
    }
  }

  button {
    display: flex;
    align-items: center;
    background-color: #333333;
    border-radius: 4px;
    font-size: 14px;
    color: white;
    border: none;
    height: 42px;
    width: 35%;
    justify-content: center;
    padding: 0px 10px;
    margin-left: 10px;

    &.dark {
      background-color: #111;

      &:hover {
        background-color: #222;
      }
    }
    
    &:hover {
      cursor: pointer;
      background-color: #444444;
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: right;
    width: 35%;
  }

`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    :checked + span {
      background-color: #111111;
    }

    :checked + span:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
      background-color: #eee;
    }
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 4px;
    -webkit-transition: .4s;
    transition: .4s;

    :before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      border-radius: 2px;
      background-color: #555;
      -webkit-transition: .4s;
      transition: .4s;
    }
  }
 
`;

