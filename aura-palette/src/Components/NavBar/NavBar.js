import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

export const NavBar = ({ palette }) => {
  const navigate = useNavigate();

  return (
    <S.NavBar>
      <S.AppName onClick={() => navigate("/")}>aura</S.AppName>
      <S.LoginButton>
        <S.StyledProfileIcon height="50px" onClick={() => navigate("/profile")}/>
      </S.LoginButton>

      <S.GradientLine colorList={palette}/>
    </S.NavBar>
  );
};
