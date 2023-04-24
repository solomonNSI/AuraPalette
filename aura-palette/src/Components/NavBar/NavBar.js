import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

export var DarkMode = "light"

export const NavBar = ({ palette }) => {
  const navigate = useNavigate();

  function setDarkMode(){
    DarkMode = "dark"; //not working because not refreshing the page 
  }

  return (
    <S.NavBar className = {DarkMode}>
      <S.AppName onClick={() => navigate("/")}>aura</S.AppName>
      <S.LoginButton>
        <S.StyledProfileIcon className = {DarkMode}
          height="50px"
          onClick={() => navigate("/profile")}
        />
      </S.LoginButton >
      {/*<S.GradientLine colorList={palette}/>*/}
    </S.NavBar>
  );
};
