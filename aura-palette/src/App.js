import * as S from "./style";
import { NavBar } from "./Components/NavBar/NavBar";
import { AdjustmentsMenu } from "./Components/AdjustmentsMenu/AdjustmentsMenu";
import { Palette } from "./Components/Palette/Palette";

function App() {
  return (
    <div style={{ backgroundColor: "#eeeeee", height: "100vh" }}>
      <NavBar />

      <S.Content>
        <S.Title>Find a palette for everything.</S.Title>
        <S.SearchBar />
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
          <AdjustmentsMenu />
          <Palette />
        </S.PaletteContainer>
      </S.Content>
    </div>
  );
}

export default App;
