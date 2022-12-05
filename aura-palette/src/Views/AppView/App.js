import * as S from "./style";
import { NavBar } from "../../Components/NavBar/NavBar";
import { AdjustmentsMenu } from "../../Components/AdjustmentsMenu/AdjustmentsMenu";
import { Palette } from "../../Components/Palette/Palette";
import { useState, useEffect } from "react";
import { getAnalogousPalette, getComplementaryPalette } from "../../Helpers/Harmony";



function App() {
  const defaultBaseColor = "#0700D6";
  const defaultPalette = ["#880BE3", "#510CED", defaultBaseColor, "#0C40ED", "#0B76E3"];
  
  const [palette, setPalette] = useState({ palette: defaultPalette});
  const [harmony, setHarmony] = useState("None");

  // Todo: Fix problem with syncing
  useEffect(() => {
    console.log("harmony", harmony, "pal", palette.palette);
    console.log("default", defaultPalette);
    switch(harmony) {
      case "None": 
        setPalette( prevState => { return {...prevState, palette: defaultPalette}}); 
        break;
      case "Analogous": 
        setPalette(prevState => { return {...prevState, palette: getAnalogousPalette(palette.palette)}}); 
        break;
      case "Complementary":        
        setPalette(prevState => { return {...prevState, palette: getComplementaryPalette(palette.palette)}}); 
        break;
      default:
        break;
    }
    console.log("updated v", palette.palette);
  }, [harmony]);

  return (
    <div style={{ backgroundColor: "#eeeeee", height: "100vh" }}>
      <NavBar palette={palette.palette} />

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
          <AdjustmentsMenu palette={palette.palette} setPalette={setPalette} setHarmony={setHarmony} />
          <Palette palette={palette.palette} />
        </S.PaletteContainer>
      </S.Content>
    </div>
  );
}

export default App;
