import React, { useEffect, useState, useRef } from "react";
import { CopyIcon } from "../../Icons/CopyIcon";
import { LockIcon } from "../../Icons/LockIcon";
import * as S from "./style";
import {
  hexToHSLWriter,
  hexToRgbWriter,
} from "../../Helpers/ColorCodes";
import { EditCanvas } from "../EditCanvas/EditCanvas";
import { getColorBlindSimulation } from "../../Helpers/ColorBlindness";
import { getColorForMedium } from "../../Helpers/Medium";

export const Palette = ({ palette, lock, setLock, setHarmony, harmony, setEditedColorIndex, setEditedColor, colorBlindness, medium, DarkMode, query, queryChanged }) => {
    const infoRef = useRef(null);
    const rateRef = useRef(null);
    const logNotifyRef = useRef(null);

    const [colorMode, setColorMode] = useState("HEX");
    const [lock0, setLock0] = useState("Not Locked");
    const [lock1, setLock1] = useState("Not Locked");
    const [lock2, setLock2] = useState("Not Locked");
    const [lock3, setLock3] = useState("Not Locked");
    const [lock4, setLock4] = useState("Not Locked");
    const [infoEnabled, setInfoEnabled] = useState(false);
    const [rateEnabled, setRateEnabled] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [sliderValue, setSliderValue] = useState(3);
    const [textAreaValue, setTextAreaValue] = useState("");
    const [feedbackButtonText, setFeedbackButtonText] = useState("Send Feedback");
    const [clickedFavorite, setClickedFavorite] = useState(false);
    const [collectedColors, setCollectedColors] = useState([]);
    const [visibility, setVisibility] = useState([false, false, false, false, false]);
    const [colorBlindnessVisible, setColorBlindnessVisible] = useState(false);
    const [mediumVisible, setMediumVisible] = useState(false);

    const changeColorMode = () => {
        if (colorMode === "HEX") setColorMode("RGB");
        else if (colorMode === "RGB") setColorMode("HSL");
        else if (colorMode === "HSL") setColorMode("HEX");
    };

    async function sendFeedback() {
        // Query can be accessible with "query" keyword
        // Palette can be accessible with "palette" array
        // Slider rate number value can be accessible with "sliderValue" keyword
        // Texts in text area can be accessible with "textAreaValue" keyword

        // These functions reset the slider and text area when clicked the button - enabling more feedback.
        setTextAreaValue("");
        setSliderValue("3");
        setFeedbackButtonText("Feedback is submitted!")
        document.getElementById("feedbackButton").style.setProperty("background-color", "#64E225", "important")
        document.getElementById("feedbackButton").style.setProperty("color", "#333333", "important")

        setInterval(function(){
            setFeedbackButtonText("Send Feedback")
            document.getElementById("feedbackButton").style.backgroundColor = "#333333";
            document.getElementById("feedbackButton").style.color = "#ffffff";
         }, 3000);


        if(sessionStorage.getItem('user_token') != null){
            var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
            xmlhttp.open("POST", "https://may22-vhxzdlegrq-uc.a.run.app/feedback/sendfeedback/");
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xmlhttp.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('user_token'));
            var qInfo = '{"query":"' +  query + '", "color1": "' + palette[0]+ '", "color2": "'
            + palette[1] + '", "color3": "' + palette[2] + '", "color4": "' + palette[3] + '", "color5": "' + palette[4] + '", "rate": "' + sliderValue + '", "comment": "' + textAreaValue + '"}'
        
            xmlhttp.onload  = function() {
                var jsonResponse = xmlhttp.response;
                console.log(jsonResponse);
            };
            xmlhttp.send(qInfo)
        }
        
    }

    function addToFavorites(){
        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
        if(sessionStorage.getItem('user_token') != null){
          xmlhttp.open("POST", "https://may22-vhxzdlegrq-uc.a.run.app/account/addfavorite/");
          xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
          xmlhttp.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('user_token'));
          var palInfo = '{"query":"' +  query + '", "color1": "' + palette[0]+ '", "color2": "'
          + palette[1] + '", "color3": "' + palette[2] + '", "color4": "' + palette[3] + '", "color5": "' + palette[4] + '"}'
          xmlhttp.send(palInfo)
        }
    }

    useEffect(() => {
    }, [clickedFavorite]);

    useEffect(() => {
        checkLoggedInForFav1();
    }, []);

    function checkLoggedInForFav1(){
        var xmlhttp = new XMLHttpRequest();
        var token_to_check;
        xmlhttp.open("GET", "https://may22-vhxzdlegrq-uc.a.run.app/account/checktoken/");
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem('user_token'));
        xmlhttp.onload  = function() {
          var jsonResponse = xmlhttp.response;
          jsonResponse = JSON.parse(jsonResponse);
          token_to_check = JSON.stringify(jsonResponse['user_token']);
          if(token_to_check === sessionStorage.getItem('user_token')){
            // user is logged in
            setLoggedIn(true);
          }
          else{
            setLoggedIn(false);
          }   
        }
        xmlhttp.send();
    }

    function handleFavLogic() {
        if(!loggedIn) {
            setClickedFavorite(prevClickedFavorite => !prevClickedFavorite);
        } else {
            addToFavorites();
            setClickedFavorite(prevClickedFavorite => !prevClickedFavorite);
        }
    }

    function removeFromFavorites(){
        setClickedFavorite(false);
    }

    useEffect(() => {
    }, [infoEnabled]);

    useEffect(() => {
    }, [rateEnabled]);
    
    function showInfo() {
        setInfoEnabled(prevInfoEnabled => !prevInfoEnabled);
    }

    function showRate() {
        setRateEnabled(prevRateEnabled => !prevRateEnabled);
    }

    function displayPaletteColors(colorNumber) {
        if (colorMode === "RGB") return hexToRgbWriter(palette[colorNumber]);
        else if (colorMode === "HSL") return hexToHSLWriter(palette[colorNumber]);
        else if (colorMode === "HEX") return palette[colorNumber];
    }

    function copyPaletteColors(){
        navigator.clipboard.writeText("Query: " + query +
                                    " | 1st Color: " + displayPaletteColors(0) + 
                                    " | 2nd Color: " + displayPaletteColors(1) + 
                                    " | 3rd Color: " + displayPaletteColors(2) + 
                                    " | 4th Color: " + displayPaletteColors(3) + 
                                    " | 5th Color: " + displayPaletteColors(4));

        document.getElementById("paletteCopy").style.setProperty("fill", "#64E225", "important")

        setInterval(function(){
            if(DarkMode == "dark") document.getElementById("paletteCopy").style.fill = "#888888";
            else document.getElementById("paletteCopy").style.fill = "#333333";
         }, 2000);
    }

    function updateLockArray(index) {
        var newArray = lock;
        var newValue = !lock[index];
        newArray[index] = newValue;
        setLock(newArray);

        switch(index) {
            case 0: {         
                if (lock[0]) return setLock0("Locked");
                return setLock0("Not Locked");
            }
            case 1: {         
                if (lock[1]) return setLock1("Locked");
                return setLock1("Not Locked");
            }
            case 2: {         
                if (lock[2]) return setLock2("Locked");
                return setLock2("Not Locked");
            }
            case 3: {         
                if (lock[3]) return setLock3("Locked");
                return setLock3("Not Locked");
            }
            case 4: {         
                if (lock[4]) return setLock4("Locked");
                return setLock4("Not Locked");
            }
        }  
    }

    function updateEditedColor(index) {
        setHarmony("Edit");

        switch(index) {
            case 0: {
                if (visibility[0]) setVisibility([false, false, false, false, false]);
                else setVisibility([true, false, false, false, false]);
                return setEditedColorIndex(0); 
            }
            case 1: { 
                if (visibility[1]) setVisibility([false, false, false, false, false]);
                else setVisibility([false, true, false, false, false]);
                return setEditedColorIndex(1); 
            }
            case 2: { 
                if (visibility[2]) setVisibility([false, false, false, false, false]);
                else setVisibility([false, false, true, false, false]);
                return setEditedColorIndex(2); 
            }
            case 3: { 
                if (visibility[3]) setVisibility([false, false, false, false, false]);
                else setVisibility([false, false, false, true, false]);
                return setEditedColorIndex(3); 
            }
            case 4: { 
                if (visibility[4]) setVisibility([false, false, false, false, false]);
                else setVisibility([false, false, false, false, true]);
                return setEditedColorIndex(4); 
            }
        }
    }

    useEffect(() => {
        if(colorBlindness === "None") setColorBlindnessVisible(false);
        else setColorBlindnessVisible(true);
    }, [colorBlindness, harmony, lock0, lock1, lock2, lock3, lock4]);

    // TODO: When you change color blindness mode, colors in “medium” part also changes (not the type, color itself)
    useEffect(() => {
        if(medium === "Default") setMediumVisible(false); // changing this false to true fixes the issue? but it's not the behaviour we want
        else setMediumVisible(true);
     }, [medium, lock0, lock1, lock2, lock3, lock4]);

    function renderBlindColors(){
        var blindColors = [];
        for (var i = 0; i < 5; i++) {
            blindColors.push(
                <S.Color key={i} colorHex={getColorBlindSimulation(palette[i], colorBlindness)}>
                    <S.ColorCode>
                        {getColorBlindSimulation(palette[i], colorBlindness)}
                        {/* <S.Copy onClick={() => { navigator.clipboard.writeText(getColorBlindSimulation(palette[i], colorBlindness))}} >
                            <CopyIcon />
                        </S.Copy> */}
                    </S.ColorCode>
                </S.Color>
            );
        }
        return blindColors;
    }


    const renderMediumColors = () => {
        const mediumColors = [];
        for (let i = 0; i < 5; i++) {
          mediumColors.push(getColorForMedium(palette[i], medium));
        }
        setCollectedColors(mediumColors);
    };
    
    useEffect(() => {
        renderMediumColors();
    }, [palette, medium]);

    const handleClickOutside = (event) => {
        if ((
            infoRef.current &&
            !infoRef.current.contains(event.target) &&
            !event.target.classList.contains("info-icon") 
        )) {
            setInfoEnabled(false);
        }
        if ((
            rateRef.current && 
            !rateRef.current.contains(event.target) && 
            !event.target.classList.contains("info-icon") 
        ))
            {
            setRateEnabled(false);
        }
        if ((
            logNotifyRef.current && 
            !logNotifyRef.current.contains(event.target) &&
            !event.target.classList.contains("info-icon") &&
            !loggedIn
        )) {
        console.log("i am er");
          setClickedFavorite(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
    <S.Container className = {DarkMode}>
        <S.MainPalette id="palette-container"  className = {DarkMode}>
        <S.Header id="palette-header"  className = {DarkMode}>
            <S.PaletteTitle className = {DarkMode}>Palette</S.PaletteTitle>
            <S.StyledInfoIcon className = {DarkMode} onClick={showInfo}/>
            <S.Info ref={infoRef} className = {DarkMode} infoEnabled={infoEnabled}>
              GPT API is on high demand rn
            </S.Info>
            <S.StyledRateIcon className = {DarkMode} onClick={showRate} />
            <S.Rate ref={rateRef} className = {`slidecontainer ${DarkMode}`} rateEnabled={rateEnabled}>
                <div>
                    <p>Rate This Palette</p>
                    <div>
                        <input type="range" min="1" max="5" value={sliderValue} onChange={(e) => setSliderValue(e.target.value)} className="slider" id="myRange"></input>
                        <p>{sliderValue}</p>
                    </div>
                    <textarea placeholder="Give Feedback" rows="2" value={textAreaValue} onChange={(e) => setTextAreaValue(e.target.value)}></textarea>
                    <button id="feedbackButton" disabled={!textAreaValue} onClick={sendFeedback}>{feedbackButtonText}</button>
                </div>
            </S.Rate>


            <S.ColorModeButton className = {DarkMode} onClick={changeColorMode}>
                <span>Color Mode: </span> {colorMode}
            </S.ColorModeButton>
            {(clickedFavorite && loggedIn) ? 
                <S.StyledFullStarIcon className = {DarkMode} width="26px" onClick={removeFromFavorites} /> : 
                <S.StyledStarIcon className = {`${DarkMode} info-icon`} width="22px" onClick={handleFavLogic} />
            }
            <S.LogInNotify ref={logNotifyRef} className = {DarkMode} infoEnabled={(clickedFavorite && !loggedIn)}>If you like this palette and want to use it in your future projects, you can log in to save it.</S.LogInNotify>
            <S.StyledPaletteCopyIcon className = {DarkMode} id="paletteCopy" height="20px" onClick={copyPaletteColors} />
        </S.Header>
        <S.Colors>
            <S.Color colorHex={palette[0]}>
                <S.ColorCode>
                    {displayPaletteColors(0)}
                    <S.Copy
                    onClick={() => {
                        navigator.clipboard.writeText(displayPaletteColors(0));
                    }}
                    >
                    <CopyIcon />
                    </S.Copy>
                </S.ColorCode>
                <S.LockDisplay onClick={() => { updateLockArray(0); }}>
                    <S.Lock>
                        <LockIcon height="18px" />
                    </S.Lock>
                    {lock0}
                </S.LockDisplay>

                <S.EditDisplay className = {DarkMode} onClick={() => { updateEditedColor(0) }} visible={visibility[0]}>
                    <span>Edit Color</span>
                </S.EditDisplay>
                <EditCanvas id={0} color={palette[0]} setEditedColor={setEditedColor} visible={visibility[0]} />
            </S.Color>

            <S.Color colorHex={palette[1]}>
                <S.ColorCode>
                    {displayPaletteColors(1)}
                    <S.Copy
                    onClick={() => {
                        navigator.clipboard.writeText(displayPaletteColors(1));
                    }}
                    >
                    <CopyIcon />
                    </S.Copy>
                </S.ColorCode>
                <S.LockDisplay onClick={() => { updateLockArray(1)}}>
                    <S.Lock>
                        <LockIcon height="18px" />
                    </S.Lock>
                    {lock1}
                </S.LockDisplay>
                <S.EditDisplay className = {DarkMode} visible={visibility[1]} onClick={() => { updateEditedColor(1) }}>
                    <span>Edit Color</span>
                </S.EditDisplay>
                <EditCanvas id={1} color={palette[1]} setEditedColor={setEditedColor} visible={visibility[1]}/>
            </S.Color>


            <S.Color colorHex={palette[2]}>
                <S.ColorCode>
                    {displayPaletteColors(2)}
                    <S.Copy
                    onClick={() => {
                        navigator.clipboard.writeText(displayPaletteColors(2));
                    }}
                    >
                    <CopyIcon />
                    </S.Copy>
                </S.ColorCode>
                <S.LockDisplay onClick={() => {updateLockArray(2)}}>
                    <S.Lock>
                        <LockIcon height="18px" />
                    </S.Lock>
                    {lock2}
                </S.LockDisplay>
                <S.EditDisplay className = {DarkMode} visible={visibility[2]} onClick={() => { updateEditedColor(2) }}>
                    <span>Edit Color</span>
                </S.EditDisplay>
                <EditCanvas id={2} color={palette[2]} setEditedColor={setEditedColor} visible={visibility[2]}/>
            </S.Color>

            <S.Color colorHex={palette[3]}>
                <S.ColorCode>
                    {displayPaletteColors(3)}
                    <S.Copy
                    onClick={() => {
                        navigator.clipboard.writeText(displayPaletteColors(3));
                    }}
                    >
                    <CopyIcon />
                    </S.Copy>
                </S.ColorCode>
                <S.LockDisplay onClick={() => { updateLockArray(3)}}>
                    <S.Lock>
                        <LockIcon height="18px" />
                    </S.Lock>
                    {lock3}
                </S.LockDisplay>
                <S.EditDisplay className = {DarkMode} visible={visibility[3]} onClick={() => { updateEditedColor(3) }}>
                    <span>Edit Color</span>
                </S.EditDisplay>
                <EditCanvas id={3} color={palette[3]} setEditedColor={setEditedColor} visible={visibility[3]}/>
            </S.Color>

            <S.Color colorHex={palette[4]}>
                <S.ColorCode>
                    {displayPaletteColors(4)}
                    <S.Copy
                    onClick={() => {
                        navigator.clipboard.writeText(displayPaletteColors(0));
                    }}
                    >  
                    <CopyIcon />
                    </S.Copy>   
                </S.ColorCode>
                <S.LockDisplay onClick={() => { updateLockArray(4)}}>
                    <S.Lock>
                        <LockIcon height="18px" />
                    </S.Lock>
                    {lock4}
                    </S.LockDisplay>
                    <S.EditDisplay className = {DarkMode} visible={visibility[4]} onClick={() => { updateEditedColor(4) }}>
                    <span>Edit Color</span>
                </S.EditDisplay>
                <EditCanvas id={4} color={palette[4]} setEditedColor={setEditedColor} visible={visibility[4]}/>
            </S.Color>
        </S.Colors>
        </S.MainPalette>

        <S.OtherPalettes className = {DarkMode}>
            {/* MEDIUMS PALETTE */}
            <S.MediumColors className={`choose ${DarkMode}`} style = {{display: mediumVisible ? "none" : "flex" }}>
                <S.PaletteTitle className={`chooseText ${DarkMode}`}>Please select a medium from the adjustments menu</S.PaletteTitle>
            </S.MediumColors>
            <S.MediumColors className={DarkMode} visible={mediumVisible}>
                <S.PaletteTitle className={DarkMode}>For medium {medium} we suggest this palette: </S.PaletteTitle>
                {collectedColors.length > 0 && (
                    <S.ColorBlindPalette>
                    {collectedColors.map((color, index) => (
                        <S.Color key={index} colorHex={color}>
                            <S.ColorCode>{color}</S.ColorCode>
                        </S.Color>
                    ))}
                    </S.ColorBlindPalette>
                )}
            </S.MediumColors>

            {/* COLOR BLIND PALETTE */}
            <S.ColorBlindColors className={`choose ${DarkMode}`}  style = {{display: colorBlindnessVisible ? "none" : "flex" }}>
                <S.PaletteTitle className={`chooseText ${DarkMode}`} >Please select a color blindness from the adjustments menu</S.PaletteTitle>
            </S.ColorBlindColors>
            <S.ColorBlindColors className = {DarkMode} visible={colorBlindnessVisible}>
                <S.PaletteTitle className = {DarkMode}> People with {colorBlindness} see the palette like this:</S.PaletteTitle>
                <S.ColorBlindPalette>
                    {renderBlindColors()}
                </S.ColorBlindPalette>
            </S.ColorBlindColors>
        </S.OtherPalettes>
    </S.Container>
  );
};
