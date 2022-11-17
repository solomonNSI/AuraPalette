import React from "react";
import * as S from "./style";

// functional components
export const NavBar = (parameter) => {
  // bi function
  const getString = (name) => {
    return name;
  };

  return (
    <S.NavBar>
      <S.AppName>aura</S.AppName>
      <S.LoginButton>
        <S.StyledProfileIcon />
        {/* {getString("getString e verilen parametre")} */}
      </S.LoginButton>

      <S.GradientLine></S.GradientLine>
    </S.NavBar>
  );
};
