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

var title;
var titles = ["Find a palette for everything.", 
            "Let the AI find a palette for you.",
            "Discover your perfect palette.",
            "Create stunning designs with our AI palettes.",
            "Discover the power of AI for your color needs.",
            "Experience the magic of AI color selection.",
            "Your ultimate color companion powered by AI."];

function chooseTitle() {
    var randomIndex = Math.floor(Math.random() * titles.length);
    title = titles[randomIndex];
} 
chooseTitle();

var predefined_count = 9;
var predefinedColors = ["orange", "yellow", "red", "blue", "pink", "purple", "green"];

function App({ DarkMode, setIsDarkMode }) {
  const [harmony, setHarmony] = useState("None");
  const [query, setQuery] = useState("");
  const [lock, setLock] = useState([false, false, false, false, false]);
  const [palette,  setPalette] = useState({ palette: getDefaultPalette(lock) });
  const [editedColorIndex, setEditedColorIndex] = useState("");
  const [editedColor, setEditedColor] = useState();
  const [colorBlindness, setColorBlindness] = useState("None");
  const [medium, setMedium] = useState("Default");
  const [adjustmentsEnabled, setAdjustmentsEnabled] = useState(false);


  function showAdjustments() {
    if(adjustmentsEnabled)
      setAdjustmentsEnabled(false);
    else
      setAdjustmentsEnabled(true);
  }

  async function sendQuery(){
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 

    xmlhttp.open("POST", "https://model-vhxzdlegrq-uc.a.run.app/model/getpalette/");

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
      updatePalette(pal, lock);

      // if logged in add the palette to history
      if(sessionStorage.getItem('user_token') != null){
        var xmlhttp2 = new XMLHttpRequest();
        xmlhttp2.open("POST", "https://model-vhxzdlegrq-uc.a.run.app/account/addhistory/");
        xmlhttp2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp2.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('user_token'));
        var palInfo = '{"query":"' +  query + '", "color1": "' + pal[0]+ '", "color2": "'
          + pal[1] + '", "color3": "' + pal[2] + '", "color4": "' + pal[3] + '", "color5": "' + pal[4] + '"}'
        console.log(palInfo)
        xmlhttp2.send(palInfo)
      }
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

  //TODO => WHEN NEW QUERY IS ENTERED SWITCH HARMONY TO NONE
  function updatePalette(pal){
    var isPredefined = false;
    for (var i = 0; i < predefined_count; i++) {
        if (query === predefinedColors[i]) isPredefined = true;
    }

    if (!isPredefined) {
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
                    palette: getAnalogousPalette(pal, lock),
                };
                });
                break;
            case "Shades":
            case "Monochromatic":
                setPalette((prevState) => {
                return {
                    ...prevState,
                    palette: getMonochromaticPalette(pal, lock),
                };
                });
                break;
            case "Complementary":
                setPalette((prevState) => {
                return {
                    ...prevState,
                    palette: getComplementaryPalette(pal, lock),
                };
                });
                break;
            case "Triads":
                setPalette((prevState) => {
                return { ...prevState, palette: getTriadsPalette(pal, lock) };
                });
                break;
            case "Split Complementary":
                setPalette((prevState) => {
                return {
                    ...prevState,
                    palette: getSplitComplementaryPalette(pal, lock),
                };
                });
                break;
            case "Square":
                setPalette((prevState) => {
                    return { ...prevState, palette: getSquarePalette(pal, lock) };
                });
                break;
            case "Edit":
                setPalette((prevState) => {
                    return { ...prevState, palette: getEditedPalette(pal, editedColorIndex, editedColor, lock) };
                });
                break;
            default:
                break;
        }
    }
    else {
        setPalette((prevState) => {
            return { ...prevState, palette: getDefaultPalette(lock, query) };
        });
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
          return { ...prevState, palette: palette.palette };
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
        {/* <S.Title className = {DarkMode}>Find a palette for everything.</S.Title>
        <S.Title className = {DarkMode}>Let the AI find a palette for you.</S.Title>
        <S.Title className = {DarkMode}>Discover your perfect palette with AI.</S.Title>
        <S.Title className = {DarkMode}>Effortlessly create stunning designs with our AI palettes.</S.Title>
        <S.Title className = {DarkMode}>Your ultimate color companion powered by AI.</S.Title>
        <S.Title className = {DarkMode}>Discover the power of AI for your color needs.</S.Title> */}

          <S.Title className = {DarkMode}>{title}</S.Title>

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
          <S.AdjustmentsClosed className = {DarkMode} onClick={showAdjustments}> <div>Show/Hide Adjustments </div></S.AdjustmentsClosed>
          <AdjustmentsMenu setHarmony={setHarmony} setColorBlindness={setColorBlindness} setMedium={setMedium} DarkMode={DarkMode} adjustmentsEnabled={adjustmentsEnabled} />
          <Palette 
            palette={palette.palette} 
            lock={lock} 
            setLock={setLock}
            setHarmony={setHarmony} 
            harmony={harmony} 
            setEditedColorIndex={setEditedColorIndex}
            setEditedColor={setEditedColor}
            colorBlindness={colorBlindness} 
            medium={medium}
            DarkMode={DarkMode}
            query = {query}
        />
        </S.PaletteContainer>
      </S.Content>
    </S.AppBackground>
  );
}

export default App;
