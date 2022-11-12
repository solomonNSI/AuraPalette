import logo from './logo.svg';
import './App.css';
import * as S from "./style";
import { NavBar } from './NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 class="title">Bu bir h1</h1>
        <S.title>Bu bir h1 ama styled componentsla</S.title>
        <h3>Bu bir h3</h3>
        <h4>Bu bir h4</h4>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Ayda and Can
        </a>
      </header>
    </div>
  );
}

export default App;
