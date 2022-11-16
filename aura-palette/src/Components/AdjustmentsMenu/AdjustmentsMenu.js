import React from "react";
import * as S from "./style";

export const AdjustmentsMenu = () => {
  return (
    <S.MenuContainer>
      <S.Title>Adjustments</S.Title>

      <div>
        <S.Subtitle>Medium</S.Subtitle>

        <S.Container>
          <input type="radio" name="medium" defaultChecked></input>
          Default
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="radio" name="medium"></input>
          Press
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="radio" name="medium"></input>
          Video
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="radio" name="medium"></input>
          Website
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>
      </div>

      <div>
        <S.Subtitle>Harmony</S.Subtitle>

        <S.Container>
          <input type="radio" name="harmony" defaultChecked></input>
          Analogous
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="radio" name="harmony"></input>
          Monochromatic
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="radio" name="harmony"></input>
          Triad
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="radio" name="harmony"></input>
          Complementary
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="radio" name="harmony"></input>
          Split Complementary
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="radio" name="harmony"></input>
          Compound
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="radio" name="harmony"></input>
          Shades
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="radio" name="harmony"></input>
          Square
          <S.Checkmark class="checkmark"></S.Checkmark>
        </S.Container>
      </div>
    </S.MenuContainer>
  );
};
