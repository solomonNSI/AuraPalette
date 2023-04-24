import * as S from "./style";
import { NavBar } from "../../Components/NavBar/NavBar";
import { AdjustmentsMenu } from "../../Components/AdjustmentsMenu/AdjustmentsMenu";
import { Palette } from "../../Components/Palette/Palette";
import { useState, useEffect } from "react";
import { SearchIcon } from "../../Icons/SearchIcon";

import {
  getAnalogousPalette,
  getComplementaryPalette,
  getDefaultPalette,
  getMonochromaticPalette,
  getSplitComplementaryPalette,
  getSquarePalette,
  getTriadsPalette,
  getEditedPalette,
} from "../../Helpers/Harmony"; 

function App({ DarkMode, setIsDarkMode }) {
  const [harmony, setHarmony] = useState("None");
  const [query, setQuery] = useState("");
  const [lock, setLock] = useState([false, false, false, false, false]);
  const [palette, setPalette] = useState({ palette: getDefaultPalette(lock) });
  const [editedColorIndex, setEditedColorIndex] = useState("");
  const [editedColor, setEditedColor] = useState();
  const [colorBlindness, setColorBlindness] = useState("None");

  async function sendQuery(){
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttp.open("POST", "http://164.92.237.219/model/getpalette/");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    var qInfo = '{"query" : "' + query + '"}';
    xmlhttp.onload  = function() {
      var jsonResponse = xmlhttp.response;
      console.log(jsonResponse);
      jsonResponse = JSON.parse(jsonResponse);
      var colorResponse = jsonResponse['samples'];

      var no = Math.floor(Math.random() * 5);
      var pal = colorResponse[no];
      for ( var i = 0; i < 5; i++) {
        if (!lock[i]) pal[i] = rgbToHex(pal[i][0],pal[i][1],pal[i][2]);
      }
      updatePalette(pal);
    };
    xmlhttp.send(qInfo)

    // At request level
    // const agent = new https.Agent({  
    //   rejectUnauthorized: false,
    //   requestCert: false,
    //   agent: false,
    // });
    // await axios.post("http://164.92.237.219/model/getpalette/", {https: agent}).then((resp) => {
    //   console.log(resp);
    // })
  }

  function updatePalette(pal){
    switch (harmony) {
        case "None":
            setPalette((prevState) => {
            return { ...prevState, palette: getDefaultPalette() };
            });
            break;
        case "Analogous":
            setPalette((prevState) => {
            return {
                ...prevState,
                palette: getAnalogousPalette(pal),
            };
            });
            break;
        case "Shades":
        case "Monochromatic":
            setPalette((prevState) => {
            return {
                ...prevState,
                palette: getMonochromaticPalette(pal),
            };
            });
            break;
        case "Complementary":
            setPalette((prevState) => {
            return {
                ...prevState,
                palette: getComplementaryPalette(pal),
            };
            });
            break;
        case "Triads":
            setPalette((prevState) => {
            return { ...prevState, palette: getTriadsPalette(pal) };
            });
            break;
        case "Split Complementary":
            setPalette((prevState) => {
            return {
                ...prevState,
                palette: getSplitComplementaryPalette(pal),
            };
            });
            break;
        case "Square":
            setPalette((prevState) => {
                return { ...prevState, palette: getSquarePalette(pal) };
            });
            break;
        case "Edit":
            setPalette((prevState) => {
                return { ...prevState, palette: getEditedPalette(pal, editedColorIndex, editedColor) };
            });
            break;
        default:
            break;
    }
  }

  function rgbToHex(red, green, blue) {
    red = Math.floor(red)
    green = Math.floor(green)
    blue = Math.floor(blue)
    const rgb = (red << 16) | (green << 8) | (blue << 0);
    return '#' + (0x1000000 + rgb).toString(16).slice(1);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendQuery();
    }
  };

  useEffect(() => {
    switch (harmony) {
      case "None":
        setPalette((prevState) => {
          return { ...prevState, palette: getDefaultPalette(lock) };
        });
        break;
      case "Analogous":
        setPalette((prevState) => {
          return {
            ...prevState,
            palette: getAnalogousPalette(palette.palette, lock),
          };
        });
        break;
      case "Shades":
      case "Monochromatic":
        setPalette((prevState) => {
          return { ...prevState, palette: getMonochromaticPalette(palette.palette, lock)};
        });
        break;
      case "Complementary":
        setPalette((prevState) => {
          return {
            ...prevState,
            palette: getComplementaryPalette(palette.palette, lock),
          };
        });
        break;
      case "Triads":
        setPalette((prevState) => {
          return { ...prevState, palette: getTriadsPalette(palette.palette, lock) };
        });
        break;
      case "Split Complementary":
        setPalette((prevState) => {
          return {
            ...prevState,
            palette: getSplitComplementaryPalette(palette.palette, lock)
          };
        });
        break;
      case "Square":
        setPalette((prevState) => {
          return { ...prevState, palette: getSquarePalette(palette.palette, lock) };
        });
        break;
        case "Edit":
        setPalette((prevState) => {
            return { ...prevState, palette: getEditedPalette(palette.palette, editedColorIndex, editedColor, lock) };
        });
        break;
      default:
        break;
    }
  }, [harmony, editedColorIndex, editedColor, lock]);

  return (
    <S.AppBackground className = {DarkMode}>
      <NavBar palette={palette.palette} DarkMode={DarkMode} setIsDarkMode={setIsDarkMode}/>

      <S.GradientLine className = {DarkMode} colorList={palette.palette} />

      <S.Content className = {DarkMode}>
        <S.Title className = {DarkMode}>Find a palette for everything.</S.Title>
          <S.SearchBar className = {DarkMode} placeholder="Enter a keyword to search..." onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} colorList={palette.palette}></S.SearchBar>
          <S.Search className = {DarkMode}>
            <SearchIcon />
          </S.Search>
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
          <AdjustmentsMenu setHarmony={setHarmony} setColorBlindness={setColorBlindness} DarkMode={DarkMode} />
          <Palette 
            palette={palette.palette} 
            lock={lock} 
            setLock={setLock}
            setHarmony={setHarmony} 
            harmony={harmony} 
            setEditedColorIndex={setEditedColorIndex}
            setEditedColor={setEditedColor}
            colorBlindness={colorBlindness} 
            DarkMode={DarkMode}
        />
        </S.PaletteContainer>
      </S.Content>
    </S.AppBackground>
  );
}

export default App;
