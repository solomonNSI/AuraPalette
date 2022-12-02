import React, { useState } from "react";
import { ExportIcon } from "../../Icons/ExportIcon";
import * as S from "./style";

export const Palette = ({ palette }) => {
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
        <S.Color colorHex={palette[0]}>
          <S.ColorCode>{palette[0]}</S.ColorCode>
        </S.Color>
        <S.Color colorHex={palette[1]}>
          <S.ColorCode>{palette[1]}</S.ColorCode>
        </S.Color>
        <S.Color colorHex={palette[2]}>
          <S.ColorCode>{palette[2]}</S.ColorCode>
        </S.Color>
        <S.Color colorHex={palette[3]}>
          <S.ColorCode>{palette[3]}</S.ColorCode>
        </S.Color>
        <S.Color colorHex={palette[4]}>
          <S.ColorCode>{palette[4]}</S.ColorCode>
        </S.Color>
      </S.Colors>
      
    </S.Container>
  );
};
