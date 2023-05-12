import React, { useState } from "react";
import * as S from "./style";

export const MiniPalette = ({ DarkMode, palette }) => {
    // just a default palette
    if (!palette) (
        palette = ["#92ADE4", "#92C2E4", "#92D7E4", "#92E4DD", "#92ADE4"]
    )
    const [colorMode, setColorMode] = useState("RGB");

    const changeColorMode = () => {
        if (colorMode === "RGB") setColorMode("HSB");
        else setColorMode("RGB");
    };


    function renderPalette(){
        var colors = [];
        for (var i = 0; i < 5; i++) {
            colors.push(
                <S.Color colorHex={palette[i]}>
                    <S.ColorCode>{palette[i]}</S.ColorCode>
                </S.Color>
            );
        }
        return colors;
    }

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
        {renderPalette()}
      </S.Colors>
    </S.Container>
  );
};
