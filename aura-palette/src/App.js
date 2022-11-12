import './App.css';
import * as S from "./style";
import { NavBar } from './NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>

        <S.Container>
          <div>
            <S.Title>Find a palette for everything.</S.Title>
            <S.SearchBar/>
          </div>
          <S.TopKeywords>
            Top Keywords
          </S.TopKeywords>
        </S.Container>

        <S.Container>
          <S.ColorPaletteContainer>Burada color palette olacak</S.ColorPaletteContainer>
          <S.MenuContainer>Burada menu olacak</S.MenuContainer>
        </S.Container>

      </header>
    </div>
  );
}

export default App;
