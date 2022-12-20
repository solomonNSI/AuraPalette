import * as S from "./style";
import { NavBar } from "../../Components/NavBar/NavBar";
import { AdjustmentsMenu } from "../../Components/AdjustmentsMenu/AdjustmentsMenu";
import { Palette } from "../../Components/Palette/Palette";
import { useState, useEffect } from "react";
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
  const [query, setQuery] = useState("");


  function sendQuery(){
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    xmlhttp.open("POST", "http://localhost:8000/model/getpalette/");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    var qInfo = '{"query" : "' + query + '"}';
    xmlhttp.onload  = function() {
      var jsonResponse = xmlhttp.response;
      jsonResponse = JSON.parse(jsonResponse);
      var colorResponse = jsonResponse['samples'];

      var no = Math.floor(Math.random() * 5);
      var pal = colorResponse[no];
      for( var i = 0; i < 5; i++){
        pal[i] = rgbToHex(pal[i][0],pal[i][1],pal[i][2]);
      }
      updatePalette(pal);
    };
    xmlhttp.send(qInfo)
  }

  function updatePalette(pal){
    switch (harmony) {
      case "None":
        setPalette((prevState) => {
          return { ...prevState, palette: pal };
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
    <div style={{ backgroundColor: "#eeeeee", height: "100vh" }}>
      <NavBar palette={palette.palette} />

      <S.Content>
        <S.Title>Find a palette for everything.</S.Title>
        <S.SearchBar placeholder="Enter a keyword to search..." onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown}></S.SearchBar>
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
