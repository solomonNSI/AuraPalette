import React from "react";
import { ExportIcon } from "../../Icons/ExportIcon";
import * as S from "./style";

const getColorMode = () => {
  return "RGB";
};

export const Palette = () => {
  return (
    <S.Container>
      <S.Header>
        <S.PaletteTitle>Palette</S.PaletteTitle>
        <S.ColorModeButton>{getColorMode()}</S.ColorModeButton>
        <S.StyledStarIcon height="20px" />
        <ExportIcon height="20px" />
      </S.Header>

      <S.Colors>
        <S.Color>
          <S.ColorCode>#AE5353</S.ColorCode>
        </S.Color>
        <S.Color>
          <S.ColorCode>#AE5353</S.ColorCode>
        </S.Color>
        <S.Color>
          <S.ColorCode>#AE5353</S.ColorCode>
        </S.Color>
        <S.Color>
          <S.ColorCode>#AE5353</S.ColorCode>
        </S.Color>
        <S.Color>
          <S.ColorCode>#AE5353</S.ColorCode>
        </S.Color>
      </S.Colors>
    </S.Container>
  );
};
