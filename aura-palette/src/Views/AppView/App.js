import * as S from "./style";
import { NavBar } from "../../Components/NavBar/NavBar";
import { AdjustmentsMenu } from "../../Components/AdjustmentsMenu/AdjustmentsMenu";
import { Palette } from "../../Components/Palette/Palette";
import { useState, useEffect } from "react";
import { SearchIcon } from "../../Icons/SearchIcon";

import {
  getAnalogousPalette,
  getComplementaryPalette,
  getMonochromaticPalette,
  getSplitComplementaryPalette,
  getSquarePalette,
  getTriadsPalette,
} from "../../Helpers/Harmony";

function App() {
  const defaultBaseColor = "#0700D6";
  const defaultPalette = [
    "#E3390B",
    "#EA0CED",
    defaultBaseColor,
    "#0CD4ED",
    "#7AE688",
  ];

  const [palette, setPalette] = useState({ palette: defaultPalette });
  const [harmony, setHarmony] = useState("None");

  useEffect(() => {
    switch (harmony) {
      case "None":
        setPalette((prevState) => {
          return { ...prevState, palette: defaultPalette };
        });
        break;
      case "Analogous":
        setPalette((prevState) => {
          return {
            ...prevState,
            palette: getAnalogousPalette(palette.palette),
          };
        });
        break;
      case "Shades":
      case "Monochromatic":
        setPalette((prevState) => {
          return {
            ...prevState,
            palette: getMonochromaticPalette(palette.palette),
          };
        });
        break;
      case "Complementary":
        setPalette((prevState) => {
          return {
            ...prevState,
            palette: getComplementaryPalette(palette.palette),
          };
        });
        break;
      case "Triads":
        setPalette((prevState) => {
          return { ...prevState, palette: getTriadsPalette(palette.palette) };
        });
        break;
      case "Split Complementary":
        setPalette((prevState) => {
          return {
            ...prevState,
            palette: getSplitComplementaryPalette(palette.palette),
          };
        });
        break;
      case "Square":
        setPalette((prevState) => {
          return { ...prevState, palette: getSquarePalette(palette.palette) };
        });
        break;
      default:
        break;
    }
  }, [harmony]);

  return (
    <div
      style={{
        backgroundColor: "#eeeeee",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <NavBar palette={palette.palette} />

      <S.GradientLine colorList={palette.palette} />

      <S.Content>
        <S.Title>Find a palette for everything.</S.Title>
        <S.Bar>
          <S.SearchBar placeholder="Enter a keyword to search..."></S.SearchBar>
          <S.SearchButton>
            <SearchIcon />
          </S.SearchButton>
        </S.Bar>
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
          <AdjustmentsMenu
            palette={palette.palette}
            setPalette={setPalette}
            setHarmony={setHarmony}
          />
          <Palette palette={palette.palette} />
        </S.PaletteContainer>
      </S.Content>
    </div>
  );
}

export default App;
