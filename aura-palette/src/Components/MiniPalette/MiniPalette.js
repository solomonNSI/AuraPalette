import React, { useState } from "react";
import { ExportIcon } from "../../Icons/ExportIcon";
import * as S from "./style";

export const MiniPalette = () => {
  const [colorMode, setColorMode] = useState("RGB");

  const changeColorMode = () => {
    if (colorMode === "RGB") setColorMode("HSB");
    else setColorMode("RGB");
  };

  return (
    <S.Container>
      <S.Header>
        <S.PaletteTitle>Palette</S.PaletteTitle>
        <S.ColorModeButton onClick={changeColorMode}>
          {colorMode}
        </S.ColorModeButton>
        <S.StyledStarIcon height="20px" />
        <ExportIcon height="20px" />
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
