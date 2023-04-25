import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

export const NavBar = ({ palette, DarkMode, setIsDarkMode }) => {
  const navigate = useNavigate();

  function toggleDarkMode() {
    if (DarkMode === "dark") setIsDarkMode("light")
    else setIsDarkMode("dark");
  }
  return (
    <S.NavBar className={DarkMode}>
      <S.AppName onClick={() => navigate("/")}>aura</S.AppName>
      <S.LoginButton>
        <button onClick={() => toggleDarkMode()}>Toggle mode</button>
        <S.StyledProfileIcon className = {DarkMode}
          height="50px"
          onClick={() => navigate("/profile")}
        />
      </S.LoginButton >
      {/*<S.GradientLine colorList={palette}/>*/}
    </S.NavBar>
  );
};
