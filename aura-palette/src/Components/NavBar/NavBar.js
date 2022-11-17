import React from "react";
import * as S from "./style";

  // bi function
export const NavBar = () => {
  return (
    <S.NavBar>
      <S.AppName>aura</S.AppName>
      <S.LoginButton>
        <S.StyledProfileIcon height="50px" />
      </S.LoginButton>

      <S.GradientLine />
    </S.NavBar>
  );
};
