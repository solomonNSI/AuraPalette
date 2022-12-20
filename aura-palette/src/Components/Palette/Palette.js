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
          <S.ColorCode onClick={() => {navigator.clipboard.writeText(palette[0]).toUpperCase()}}>{(palette[0]).toUpperCase()}</S.ColorCode>
        </S.Color>
        <S.Color colorHex={palette[1]}>
          <S.ColorCode onClick={() => {navigator.clipboard.writeText(palette[1]).toUpperCase()}}>{(palette[1]).toUpperCase()}</S.ColorCode>
        </S.Color>
        <S.Color colorHex={palette[2]}>
          <S.ColorCode onClick={() => {navigator.clipboard.writeText(palette[2]).toUpperCase()}}>{(palette[2]).toUpperCase()}</S.ColorCode>
        </S.Color>
        <S.Color colorHex={palette[3]}>
          <S.ColorCode onClick={() => {navigator.clipboard.writeText(palette[3]).toUpperCase()}}>{(palette[3]).toUpperCase()}</S.ColorCode>
        </S.Color>
        <S.Color colorHex={palette[4]}>
          <S.ColorCode onClick={() => {navigator.clipboard.writeText(palette[4]).toUpperCase()}}>{(palette[4]).toUpperCase()}</S.ColorCode>
        </S.Color>
      </S.Colors>
      
    </S.Container>
  );
};
