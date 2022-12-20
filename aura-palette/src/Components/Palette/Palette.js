import React, { useState } from "react";
import { ExportIcon } from "../../Icons/ExportIcon";
import { CopyIcon } from "../../Icons/CopyIcon";
import * as S from "./style";
import {
  hexToHSL,
  hexToHSLWriter,
  hexToRgb,
  hexToRgbWriter,
  hslToHex,
} from "../../Helpers/ColorCodes";

export const Palette = ({ palette }) => {
  const [colorMode, setColorMode] = useState("HEX");

  const changeColorMode = () => {
    if (colorMode === "HEX") setColorMode("RGB");
    else if (colorMode === "RGB") setColorMode("HSL");
    else if (colorMode === "HSL") setColorMode("HEX");
  };

  function displayPaletteColors(colorNumber) {
    if (colorMode === "RGB") return hexToRgbWriter(palette[colorNumber]);
    else if (colorMode === "HSL") return hexToHSLWriter(palette[colorNumber]);
    else if (colorMode === "HEX") return palette[colorNumber].toUpperCase();
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
          <S.ColorCode>
            {displayPaletteColors(0)}
            <S.Copy
              onClick={() => {
                navigator.clipboard.writeText(displayPaletteColors(0));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 0 24 24"
                width="18px"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            </S.Copy>
          </S.ColorCode>
        </S.Color>
        <S.Color colorHex={palette[1]}>
          <S.ColorCode>
            {displayPaletteColors(1)}
            <S.Copy
              onClick={() => {
                navigator.clipboard.writeText(displayPaletteColors(1));
              }}
            >
              <CopyIcon />
            </S.Copy>
          </S.ColorCode>
        </S.Color>
        <S.Color colorHex={palette[2]}>
          <S.ColorCode>
            {displayPaletteColors(2)}
            <S.Copy
              onClick={() => {
                navigator.clipboard.writeText(displayPaletteColors(2));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 0 24 24"
                width="18px"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            </S.Copy>
          </S.ColorCode>
        </S.Color>
        <S.Color colorHex={palette[3]}>
          <S.ColorCode>
            {displayPaletteColors(3)}
            <S.Copy
              onClick={() => {
                navigator.clipboard.writeText(displayPaletteColors(3));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 0 24 24"
                width="18px"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            </S.Copy>
          </S.ColorCode>
        </S.Color>
        <S.Color colorHex={palette[4]}>
          <S.ColorCode>
            {displayPaletteColors(4)}
            <S.Copy
              onClick={() => {
                navigator.clipboard.writeText(displayPaletteColors(0));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 0 24 24"
                width="18px"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            </S.Copy>
          </S.ColorCode>
        </S.Color>
      </S.Colors>
    </S.Container>
  );
};
