import React from "react";
import { colorList } from "../../ColorWizard";
import * as S from "./style";

export const NavBar = () => {
  return (
    <S.NavBar>
      <S.AppName>aura</S.AppName>
      <S.LoginButton>
        <S.StyledProfileIcon height="50px" />
      </S.LoginButton>

      <S.GradientLine colorList={colorList}/>
    </S.NavBar>
  );
};
