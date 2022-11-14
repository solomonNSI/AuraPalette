import * as S from "./style";
import { NavBar } from './Components/NavBar/NavBar';
import { AdjustmentsMenu } from "./Components/AdjustmentsMenu/AdjustmentsMenu";
import { Palette } from "./Components/Palette/Palette";

function App() {
  return (
    <div style={{ backgroundColor: '#eee', height: '100vh' }}>
      <NavBar/>

      <S.Content>
        <S.Title>Find a palette for everything.</S.Title>
        <S.SearchBar/>
        <S.TopKeywords>Top Searches</S.TopKeywords>

        <S.PaletteContainer>
          <AdjustmentsMenu/>
          <Palette/>
        </S.PaletteContainer>

      </S.Content>
    </div>
  );
}

export default App;
