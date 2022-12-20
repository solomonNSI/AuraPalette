import React, { useState } from "react";
import { ExportIcon } from "../../Icons/ExportIcon";
import * as S from "./style";
import { hexToRgb, hslToHex } from "../../Helpers/ColorWizard";

export const Palette = ({ palette }) => {
  const [colorMode, setColorMode] = useState("HEX");

  const changeColorMode = () => {
    if (colorMode === "HEX") setColorMode("RGB");
    else setColorMode("HEX");
  };

  function displayPaletteColors(paletteNumber) {
    console.log(palette[paletteNumber]);
    if (colorMode === "RGB") return hexToRgb(palette[paletteNumber]);
    if (colorMode === "HEX") return palette[paletteNumber].toUpperCase();
  }

  return (
    <S.Container>
      <S.Header>
        <S.PaletteTitle>Palette</S.PaletteTitle>
        <S.ColorModeButton onClick={changeColorMode}>
          Color Mode: {colorMode}
        </S.ColorModeButton>
        <S.StyledStarIcon height="20px" />
        <ExportIcon height="20px" />
      </S.Header>

      <S.Colors>
        <S.Color colorHex={palette[0]}>
          <S.ColorCode
            onClick={() => {
              navigator.clipboard.writeText(displayPaletteColors(0));
            }}
          >
            {displayPaletteColors(0)}
          </S.ColorCode>
        </S.Color>
        <S.Color colorHex={palette[1]}>
          <S.ColorCode
            onClick={() => {
              navigator.clipboard
                .writeText(displayPaletteColors(1))
                .toUpperCase();
            }}
          >
            {displayPaletteColors(1)}
          </S.ColorCode>
        </S.Color>
        <S.Color colorHex={palette[2]}>
          <S.ColorCode
            onClick={() => {
              navigator.clipboard
                .writeText(displayPaletteColors(2))
                .toUpperCase();
            }}
          >
            {displayPaletteColors(2)}
          </S.ColorCode>
        </S.Color>
        <S.Color colorHex={palette[3]}>
          <S.ColorCode
            onClick={() => {
              navigator.clipboard
                .writeText(displayPaletteColors(3))
                .toUpperCase();
            }}
          >
            {displayPaletteColors(3)}
          </S.ColorCode>
        </S.Color>
        <S.Color colorHex={palette[4]}>
          <S.ColorCode
            onClick={() => {
              navigator.clipboard
                .writeText(displayPaletteColors(4))
                .toUpperCase();
            }}
          >
            {displayPaletteColors(4)}
          </S.ColorCode>
        </S.Color>
      </S.Colors>
    </S.Container>
  );
};
