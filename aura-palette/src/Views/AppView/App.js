import * as S from "./style";
import { NavBar } from "../../Components/NavBar/NavBar";
import { AdjustmentsMenu } from "../../Components/AdjustmentsMenu/AdjustmentsMenu";
import { Palette } from "../../Components/Palette/Palette";
import { useState, useEffect } from "react";
import { getAnalogousPalette, getComplementaryPalette } from "../../Helpers/Harmony";

const defaultBaseColor = "#0700D6";
export const defaultPalette = ["#880BE3", "#510CED", defaultBaseColor, "#0C40ED", "#0B76E3"];

function App() {
  const [palette, setPalette] = useState(defaultPalette);
  const [harmony, setHarmony] = useState("None");

  // Todo: Fix problem with syncing
  useEffect(() => {
    switch(harmony) {
      case "None": setPalette(defaultPalette); break;
      case "Analogous": setPalette(getAnalogousPalette(palette)); break;
      case "Complementary": setPalette(getComplementaryPalette(palette)); break;
      default: break;
    }
  }, [harmony, palette]);

  return (
    <div style={{ backgroundColor: "#eeeeee", height: "100vh" }}>
      <NavBar palette={palette} />

      <S.Content>
        <S.Title>Find a palette for everything.</S.Title>
        <S.SearchBar placeholder="Enter a keyword to search..."></S.SearchBar>
        <S.TopKeywords>
          <S.TopSearch style={{ fontWeight: "500" }}>Top Searches</S.TopSearch>
          <S.TopSearch>water</S.TopSearch>
          <S.TopSearch>finance</S.TopSearch>
          <S.TopSearch>sunset</S.TopSearch>
          <S.TopSearch>rainbow</S.TopSearch>
          <S.TopSearch>happy</S.TopSearch>
          <S.TopSearch>summer</S.TopSearch>
          <S.TopSearch>sadness</S.TopSearch>
          <S.TopSearch>freedom</S.TopSearch>
          <S.TopSearch>politics</S.TopSearch>
          <S.TopSearch>ocean</S.TopSearch>
          <S.TopSearch>spring</S.TopSearch>
          <S.TopSearch>palette</S.TopSearch>
          <S.TopSearch>agriculture</S.TopSearch>
          <S.TopSearch>exciting</S.TopSearch>
          <S.TopSearch>sea</S.TopSearch>
          <S.TopSearch>discipline</S.TopSearch>
        </S.TopKeywords>

        <S.PaletteContainer>
          <AdjustmentsMenu palette={palette} setPalette={setPalette} setHarmony={setHarmony} />
          <Palette palette={palette} />
        </S.PaletteContainer>
      </S.Content>
    </div>
  );
}

export default App;
