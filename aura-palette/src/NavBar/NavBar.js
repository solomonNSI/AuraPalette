import React from "react";
import * as S from "./style";

// functional components
export const NavBar = (parameter) => {

  // bi function
  const getString = (name) => { return name };

  return (
    <S.NavBar>
      {getString("getString e verilen parametre")}
    </S.NavBar>
  ); 
}