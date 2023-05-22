import React from "react";
import styled from "styled-components";

export const AppBackground = styled.div`
  background-color: #eeeeee;
  height: 100lvh;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;

  &.dark {
    background-color: #222222;
  }
`;


export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 0px 0px 40px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }

`;

export const About = styled.div`
  margin: 20px 4% 0px 10px;
  padding: 20px;
  width: 50%;
  height: auto;
  background-color: #dddddd;
  border-radius: 8px;
  border: none;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  p {
    font-weight: 400;
  }

  @media screen and (max-width: 900px) {
    width: 92%;
    margin: 20px 4% 0px 4%;
  }

  &.dark {
    background-color: #333333;

    h1, p {
      color: #eeeeee;
    }
    
  }

  h1 {
    font-weight: 500;
    margin: 0px;
    color: #333;
    font-size: 24px;
    @media screen and (max-width: 900px) {
      font-size: 22px;
    }
  
    @media screen and (max-width: 600px) {
      font-size: 20px;
    }
  }


  p {
    text-align: center;
    font-weight: 400;
    margin: 20px 0px 0px;
    color: rgb(51, 51, 51);
    font-size: 16px;

    @media screen and (max-width: 900px) {
      font-size: 14px;
    }
  
    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }

`;

export const Feedback = styled.div`
  margin: 20px 10px 0px 4%;
  width: 50%;
  height: auto;
  border-radius: 8px;
  background-color: #888888;
  padding: 20px 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    width: 92%;
    margin: 20px 4% 0px 4%;
    height: 500px;
  }

  iframe {
    height: 100%;
    overflow: scroll;
    padding: 0;
    width: calc(100%);
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
  text-align: center;
  width: 92%;
  height: 50px;
  margin: 10px 4% 0px 4%;
  font-size: 32px;
  font-weight: 300;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;

  &.dark {
    color: #dddddd;
  }

  @media screen and (max-width: 900px) {
    font-size: 24px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;
