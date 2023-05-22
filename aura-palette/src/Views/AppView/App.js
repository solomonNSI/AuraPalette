import * as S from "./style";
import { NavBar } from "../../Components/NavBar/NavBar";
import { AdjustmentsMenu } from "../../Components/AdjustmentsMenu/AdjustmentsMenu";
import { Palette } from "../../Components/Palette/Palette";
import { useState, useEffect } from "react";
import Joyride, { STATUS } from 'react-joyride';
import {
  getAnalogousPalette,
  getComplementaryPalette,
  getDefaultPalette,
  getMonochromaticPalette,
  getSplitComplementaryPalette,
  getSquarePalette,
  getTriadsPalette,
  getEditedPalette,
  getLockedPalette,
} from "../../Helpers/Harmony"; 
import SpinnerOverlay from "../../Components/Styler";

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
  const [queryChanged, setQueryChanged] = useState(false);
  const [lock, setLock] = useState([false, false, false, false, false]);
  const [palette,  setPalette] = useState({ palette: getDefaultPalette(lock) });
  const [editedColorIndex, setEditedColorIndex] = useState("");
  const [editedColor, setEditedColor] = useState();
  const [colorBlindness, setColorBlindness] = useState("None");
  const [medium, setMedium] = useState("Default");
  const [adjustmentsEnabled, setAdjustmentsEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(getCookie("cookies"));
  const [run, setRun] = useState(true);
  const [steps, setSteps] = useState([
      {
        content: <h2>Welcome to The Aura Palette where words radiate with colors! 🌈</h2>,
        locale: { skip: <strong aria-label="skip">SKIP</strong> },
        placement: 'center',
        target: 'body',
      },
      {
        content: <p>Type your words here to generate stunning color palettes. ✍️</p>,
        target: '#search-bar',
      },
      {
        content: <p>Your unique palette will appear in this section. Feel free to lock and customize individual colors. 🎨</p>,
        target: '#palette-container',
      },
      {
        content: <p>Rate, favorite, and copy your favorite palettes for easy access. ❤️</p>,
        target: '#palette-header',
      },
      {
        content: <p>Adjust the color harmony and medium to create the perfect combination. You can even simulate different types of color blindness. 👓</p>,
        target: '#adjustments-menu',
      },
      {
        content: <p>Don't forget to check out our dark mode and sign up to unlock additional features! We'd love to hear your feedback as well. 😊</p>,
        target: '#navbar',
      },
      {
        content: <p>Feel free to explore and have fun with The Aura Palette! Enjoy your colorful journey!</p>,
        target: 'body',
        placement: 'center',
      },
    ],);

  function showAdjustments() {
    if(adjustmentsEnabled)
      setAdjustmentsEnabled(false);
    else
      setAdjustmentsEnabled(true);
  }

  function setCookie(name, value, days) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + expirationDate.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
  }

  function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  function acceptCookies() {
    setCookie("cookies", true, 1);
    setCookieAccepted(true)
  }

  async function sendQuery(){
    setIsError(false);
    setLoading(true);
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
    if (!query) {
        setLoading(false);
        return setIsEmpty(true);
    }
    setIsEmpty(false);

    xmlhttp.open("POST", "https://may13-vhxzdlegrq-lz.a.run.app/model/getpalette/");
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    var qInfo = '{"query" : "' + query.toLowerCase() + '"}';

    xmlhttp.onload  = function() {
      var jsonResponse = xmlhttp.response;
      jsonResponse = JSON.parse(jsonResponse);
      if(jsonResponse['code'] == null){
        var colorResponse = jsonResponse['samples'];

        var no = Math.floor(Math.random() * 5);
        var pal = colorResponse[no];
        for ( var i = 0; i < 5; i++) {
          if (!lock[i]) pal[i] = rgbToHex(pal[i][0],pal[i][1],pal[i][2]);
        }
        updatePalette(pal);
        setLoading(false);
        // if logged in add the palette to history
        if(sessionStorage.getItem('user_token') != null){
          var xmlhttp2 = new XMLHttpRequest();
          xmlhttp2.open("POST", "https://may13-vhxzdlegrq-lz.a.run.app/account/addhistory/");
          xmlhttp2.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
          xmlhttp2.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('user_token'));
          var palInfo = '{"query":"' +  query + '", "color1": "' + pal[0]+ '", "color2": "'
          + pal[1] + '", "color3": "' + pal[2] + '", "color4": "' + pal[3] + '", "color5": "' + pal[4] + '"}'
          console.log(palInfo)
          xmlhttp2.send(palInfo)
        }
      }
      else {
        if (jsonResponse['err_msg'] == "INVALID_QUERY")
        {
            updatePalette(getDefaultPalette(lock));
            setIsError(true)
            setLoading(false)
        }
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

  function updatePalette(pal){
    var isPredefined = false;
    for (var i = 0; i < predefined_count; i++) {
        if (query === predefinedColors[i]) isPredefined = true;
    }

    if (!isPredefined) {
        switch (harmony) {
            case "None":
                setPalette((prevState) => {
                return { ...prevState, palette: getLockedPalette(prevState, pal, lock), };
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
      setQueryChanged(true);

      setTimeout(() => {
        setQueryChanged(false);
      }, 9000);

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

  useEffect(() => {
    function runFunc(prop) { setRun(prop) }
    if (localStorage.getItem('tutorialPassed')) runFunc(false);
  }, []);

  return (
    <S.AppBackground className={DarkMode}>
      {loading && <SpinnerOverlay />}
        <Joyride
            continuous
            hideCloseButton
            run={run}
            scrollToFirstStep
            showProgress
            showSkipButton
            steps={steps}
            styles={{
              options: {
                arrowColor: '#333',
                backgroundColor: '#ccc',
                primaryColor: '#000',
                textColor: '#333333',
                borderRadius: '20%',
                fontWeight: '300',
                zIndex: 1000,
              }
            }}
            callback={({ status }) => {
                if (([STATUS.FINISHED, STATUS.SKIPPED]).includes(status))
                    localStorage.setItem('tutorialPassed', true);
            }}
        />
      <NavBar palette={palette.palette} DarkMode={DarkMode} setIsDarkMode={setIsDarkMode}/>
      <S.CookieAlert className = {DarkMode} style = {{display: cookieAccepted ? "none" : "flex" }}>
        <span>We only use cookies for dark mode preference.</span>
        <button onClick={acceptCookies}>Done</button>
      </S.CookieAlert>

      <S.Content className = {DarkMode}>
            <S.Title className = {DarkMode}>{title}</S.Title>
            <S.Search className = {DarkMode}>
              <S.SearchBar className = {DarkMode} id="search-bar" placeholder="Enter some keywords and AI will generate a palette..." onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown} colorList={palette.palette}></S.SearchBar>
              <S.GenerateButton className = {DarkMode} onClick={sendQuery}>Generate</S.GenerateButton>
            </S.Search>

            <p className="errmsg" style = {{display: isError ? "flex" : "none" }}>
                The generated palette may not fully represent the meaning of this text. Please try another word for more accurate results.
            </p>
            <p className="errmsg" style = {{display: isEmpty ? "flex" : "none" }}>
                Please enter a word.
            </p>
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
            <S.AdjustmentsClosed className={DarkMode} onClick={showAdjustments}> 
                <div>Show/Hide Adjustments</div>
            </S.AdjustmentsClosed>
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
                queryChanged = {queryChanged}
            />
            </S.PaletteContainer>
        </S.Content>
    </S.AppBackground>
  );
}

export default App;
