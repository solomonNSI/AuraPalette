import React, { useState } from "react";
import * as S from "./style";

export const MiniPalette = ({ DarkMode, palette, query }) => {
    const [colorMode, setColorMode] = useState("RGB");
    if (!query) query = "None"

    const changeColorMode = () => {
        if (colorMode === "RGB") setColorMode("HSB");
        else setColorMode("RGB");
    };

  return (
    <S.Container className = {DarkMode}>
      <S.Header className = {DarkMode}>
        <S.Titles className = {DarkMode}>
          <S.PaletteTitle className = {DarkMode}>Query: {query}</S.PaletteTitle>
          {/* <S.Date className = {DarkMode}>Enter Creation Date Here</S.Date> */}
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
            <S.Color colorHex={palette.color1}>
                <S.ColorCode>{palette.color1}</S.ColorCode>
            </S.Color>

            <S.Color colorHex={palette.color2}>
                <S.ColorCode>{palette.color2}</S.ColorCode>
            </S.Color>

            <S.Color colorHex={palette.color3}>
                <S.ColorCode>{palette.color3}</S.ColorCode>
            </S.Color>

            <S.Color colorHex={palette.color4}>
                <S.ColorCode>{palette.color4}</S.ColorCode>
            </S.Color>

            <S.Color colorHex={palette.color5}>
                <S.ColorCode>{palette.color5}</S.ColorCode>
            </S.Color>
         </S.Colors>
    </S.Container>
  );
};
