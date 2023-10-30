import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import * as S from "./style";

export const NavBar = ({ palette, DarkMode, setIsDarkMode }) => {
  const navigate = useNavigate();

  function setCookie(name, value, days) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + expirationDate.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
  }

  function toggleDarkMode() {
    if (DarkMode === "dark")
    {
      setIsDarkMode("light")
      setCookie("darkmode", "light", 1);
    }
    else 
    {
      setIsDarkMode("dark");
      setCookie("darkmode", "dark", 1);
    }
  }

  function checkLoggedIn(){
    if(sessionStorage.getItem('user_token') == null)
      navigate("/login");

    var xmlhttp = new XMLHttpRequest();
    var token_to_check;
    var loggedIn = false;
    xmlhttp.open("GET", "https://may22-vhxzdlegrq-uc.a.run.app/account/checktoken/");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('user_token'));
    xmlhttp.onload  = function() {
      var jsonResponse = xmlhttp.response;
      jsonResponse = JSON.parse(jsonResponse);
      token_to_check = JSON.stringify(jsonResponse['user_token']);
      if(token_to_check === sessionStorage.getItem('user_token'))
        navigate("/profile");
      else
        navigate("/login");      
    }
    xmlhttp.send();
  }
  return (
    <S.NavBar className={DarkMode}>
      <S.AppName onClick={() => navigate("/")}>aura</S.AppName>
      <S.LoginButton id="navbar">
        <S.StyledFeedbackIcon className = {DarkMode}
          onClick={() => navigate("/about")}
          height="46px"
        >Feedback</S.StyledFeedbackIcon>
        <S.StyledMoonIcon className = {DarkMode} 
          onClick={() => toggleDarkMode()}
        />
        <S.StyledSunIcon className = {DarkMode} 
          onClick={() => toggleDarkMode()}
        />
        <S.StyledProfileIcon className = {DarkMode}
          height="46px"
          onClick={() => checkLoggedIn()}
        />
      </S.LoginButton >
      {palette && <S.GradientLine colorList={palette}/>}
      {!palette && <S.GradientLineDefault />}
    </S.NavBar>
  );
};
