import React from "react";
import * as S from "./style";

export const AdjustmentsMenu = () => {
  return (
    <S.MenuContainer>
      <S.Title>Adjustments</S.Title>

      <div>
        <S.Subtitle>Medium</S.Subtitle>

        <S.Container>
          <input type="checkbox"></input>
          Default
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="checkbox"></input>
          Press
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="checkbox"></input>
          Video
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="checkbox"></input>
          Website
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>
      </div>

      <div>
        <S.Subtitle>Harmony</S.Subtitle>

        <S.Container>
          <input type="checkbox"></input>
          Analogous
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="checkbox"></input>
          Monochromatic
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="checkbox"></input>
          Triad
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="checkbox"></input>
          Complementary
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="checkbox"></input>
          Split Complementary
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="checkbox"></input>
          Compound
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="checkbox"></input>
          Shades
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="checkbox"></input>
          Square
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>
      </div>
    </S.MenuContainer>
  );
};
