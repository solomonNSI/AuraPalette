import React, { useState } from "react";
import { ExportIcon } from "../../Icons/ExportIcon";
import { colorList } from "../../Helpers/ColorWizard";
import * as S from "./style";

export const Palette = () => {
  const [colorMode, setColorMode] = useState("RGB");

  const changeColorMode = () => {
    if (colorMode === "RGB") setColorMode("HSB");
    else setColorMode("RGB");
  }

  return (
    <S.Container>
      <S.Header>
        <S.PaletteTitle>Palette</S.PaletteTitle>
        <S.ColorModeButton onClick={changeColorMode}>{colorMode}</S.ColorModeButton>
        <S.StyledStarIcon height="20px" />
        <ExportIcon height="20px" />
      </S.Header>

      <S.Colors>
        <S.Color colorHex={colorList[0]}>
          <S.ColorCode>{colorList[0]}</S.ColorCode>
        </S.Color>
        <S.Color colorHex={colorList[1]}>
          <S.ColorCode>{colorList[1]}</S.ColorCode>
        </S.Color>
        <S.Color colorHex={colorList[2]}>
          <S.ColorCode>{colorList[2]}</S.ColorCode>
        </S.Color>
        <S.Color colorHex={colorList[3]}>
          <S.ColorCode>{colorList[3]}</S.ColorCode>
        </S.Color>
        <S.Color colorHex={colorList[4]}>
          <S.ColorCode>{colorList[4]}</S.ColorCode>
        </S.Color>
      </S.Colors>
      
    </S.Container>
  );
};
