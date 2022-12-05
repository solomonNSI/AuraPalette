import React from "react";
import * as S from "./style";

export const AdjustmentsMenu = ({ setHarmony }) => {

  return (
    <S.MenuContainer>
      <S.Title>Adjustments</S.Title>

      <div>
        <S.Subtitle>Medium</S.Subtitle>

        <S.Container>
          <input type="radio" name="medium" defaultChecked></input>
          Default
          <S.Checkmark className="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="radio" name="medium"></input>
          Press
          <S.Checkmark className="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="radio" name="medium"></input>
          Video
          <S.Checkmark className="checkmark"></S.Checkmark>
        </S.Container>

        <S.Container>
          <input type="radio" name="medium"></input>
          Website
          <S.Checkmark className="checkmark"></S.Checkmark>
        </S.Container>
      </div>

      <div>
        <S.Subtitle>Harmony</S.Subtitle>

        <S.Container>
          <input type="radio" name="harmony" defaultChecked onChange={() => setHarmony("None")} />
          None
          <S.Checkmark className="checkmark" />
        </S.Container>

        <S.Container>
          <input type="radio" name="harmony" onChange={() => setHarmony("Analogous")} />
          Analogous
          <S.Checkmark className="checkmark" />
        </S.Container>

        <S.Container>
          <input type="radio" name="harmony" onChange={() => setHarmony("Monochromatic")} />
          Monochromatic
          <S.Checkmark className="checkmark" />
        </S.Container>

        <S.Container>
          <input type="radio" name="harmony"  onChange={() => setHarmony("Triads")} />
          Triads
          <S.Checkmark className="checkmark" />
        </S.Container>

        <S.Container>
        <input type="radio" name="harmony" onChange={() => setHarmony("Complementary")} />
          Complementary
          <S.Checkmark className="checkmark" />
        </S.Container>

        <S.Container>
          <input type="radio" name="harmony" onChange={() => setHarmony("Split Complementary")} />
          Split Complementary
          <S.Checkmark className="checkmark" />
        </S.Container>

        <S.Container>
          <input type="radio" name="harmony" onChange={() => setHarmony("Shades")} />
          Shades
          <S.Checkmark className="checkmark" />
        </S.Container>

        <S.Container>
          <input type="radio" name="harmony" onChange={() => setHarmony("Square")} />
          Square
          <S.Checkmark className="checkmark" />
        </S.Container>
      </div>
    </S.MenuContainer>
  );
};
