import React, { useState } from "react";
import * as S from "./style";

export const MiniPalette = ({ DarkMode }) => {
  const [colorMode, setColorMode] = useState("RGB");

  const changeColorMode = () => {
    if (colorMode === "RGB") setColorMode("HSB");
    else setColorMode("RGB");
  };

  return (
    <S.Container className = {DarkMode}>
      <S.Header className = {DarkMode}>
        <S.Titles className = {DarkMode}>
          <S.PaletteTitle className = {DarkMode}>Enter Palette Title Here</S.PaletteTitle>
          <S.Date className = {DarkMode}>Enter Creation Date Here</S.Date>
        </S.Titles>

        <S.PaletteSettings className = {DarkMode}>
        <S.ColorModeButton className = {DarkMode} onClick={changeColorMode}>
          Color Mode: {colorMode}
        </S.ColorModeButton>
          <S.StyledStarIcon className = {DarkMode} height="20px" />
          <S.StyledExportIcon className = {DarkMode} height="20px"/>
        </S.PaletteSettings>
      </S.Header>

      <S.Colors>
        <S.Color>
          <S.ColorCode>#333333</S.ColorCode>
        </S.Color>

        <S.Color>
          <S.ColorCode>#333333</S.ColorCode>
        </S.Color>

        <S.Color>
          <S.ColorCode>#333333</S.ColorCode>
        </S.Color>

        <S.Color>
          <S.ColorCode>#333333</S.ColorCode>
        </S.Color>

        <S.Color>
          <S.ColorCode>#333333</S.ColorCode>
        </S.Color>
      </S.Colors>
    </S.Container>
  );
};
