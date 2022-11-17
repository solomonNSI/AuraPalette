import React from "react";
import { ExportIcon } from "../../Icons/ExportIcon";
import { colorList } from "../../ColorWizard";
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
