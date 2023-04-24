import React, { useEffect, useState } from "react";
import { CopyIcon } from "../../Icons/CopyIcon";
import { LockIcon } from "../../Icons/LockIcon";
import { EditIcon } from "../../Icons/EditIcon";
import * as S from "./style";
import {
  hexToHSLWriter,
  hexToRgbWriter,
} from "../../Helpers/ColorCodes";
import { EditCanvas } from "../EditCanvas/EditCanvas";
import { getColorBlindSimulation } from "../../Helpers/ColorBlindness";

export const Palette = ({ palette, lock, setLock, setHarmony, harmony, setEditedColorIndex, setEditedColor, colorBlindness, DarkMode }) => {
    const [colorMode, setColorMode] = useState("HEX");
    const [lock0, setLock0] = useState("Not locked");
    const [lock1, setLock1] = useState("Not locked");
    const [lock2, setLock2] = useState("Not locked");
    const [lock3, setLock3] = useState("Not locked");
    const [lock4, setLock4] = useState("Not locked");

    const [canvas0, setCanvas0] = useState(false);
    const [canvas1, setCanvas1] = useState(false);
    const [canvas2, setCanvas2] = useState(false);
    const [canvas3, setCanvas3] = useState(false);
    const [canvas4, setCanvas4] = useState(false);

    const [colorBlindnessVisible, setColorBlindnessVisible] = useState(false);

    const changeColorMode = () => {
        if (colorMode === "HEX") setColorMode("RGB");
        else if (colorMode === "RGB") setColorMode("HSL");
        else if (colorMode === "HSL") setColorMode("HEX");
    };

    function displayPaletteColors(colorNumber) {
        if (colorMode === "RGB") return hexToRgbWriter(palette[colorNumber]);
        else if (colorMode === "HSL") return hexToHSLWriter(palette[colorNumber]);
        else if (colorMode === "HEX") return palette[colorNumber].toUpperCase();
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
                if (canvas0) setCanvas0(false);
                else setCanvas0(true);
                setCanvas1(false);
                setCanvas2(false);
                setCanvas3(false);
                setCanvas4(false);
                return setEditedColorIndex(0); 
            }
            case 1: { 
                setCanvas0(false);
                if (canvas1) setCanvas1(false);
                else setCanvas1(true);
                setCanvas2(false);
                setCanvas3(false);
                setCanvas4(false);
                return setEditedColorIndex(1); 
            }
            case 2: { 
                setCanvas0(false);
                setCanvas1(false);
                if (canvas2) setCanvas2(false);
                else setCanvas2(true);
                setCanvas3(false);
                setCanvas4(false);
                return setEditedColorIndex(2); 
            }
            case 3: { 
                setCanvas0(false);
                setCanvas1(false);
                setCanvas2(false);
                if (canvas3) setCanvas3(false);
                else setCanvas3(true);
                setCanvas4(false);
                return setEditedColorIndex(3); 
            }
            case 4: { 
                setCanvas0(false);
                setCanvas1(false);
                setCanvas2(false);
                setCanvas3(false);
                if (canvas4) setCanvas4(false);
                else setCanvas4(true);
                return setEditedColorIndex(4); 
            }
        }
    }

    useEffect(() => {
       if(colorBlindness === "None") setColorBlindnessVisible(false);
       else setColorBlindnessVisible(true);
    }, [colorBlindness, harmony, lock0, lock1, lock2, lock3, lock4]);

    return (
    <S.Container className = {DarkMode}>
        <S.Header className = {DarkMode}>
            <S.PaletteTitle className = {DarkMode}>Palette</S.PaletteTitle>
            <S.ColorModeButton className = {DarkMode} onClick={changeColorMode}>
            Color Mode: {colorMode}
            </S.ColorModeButton>
            <S.StyledStarIcon className = {DarkMode} height="20px" />
            <S.StyledExportIcon className = {DarkMode} height="20px" />
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
                    
                    <S.Lock onClick={() => { updateEditedColor(0) }}>
                        <EditIcon height="18px" />
                    </S.Lock>
                </S.ColorCode>
                <S.LockDisplay>
                    <S.Lock onClick={() => { updateLockArray(0); }}>
                        <LockIcon height="18px" />
                    </S.Lock>
                    {lock0}
                </S.LockDisplay>
                <EditCanvas color={palette[0]} setEditedColor={setEditedColor} visible={canvas0} />
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
                    <S.Lock onClick={() => { updateEditedColor(1)}}>
                        <EditIcon height="18px" />
                    </S.Lock>
                </S.ColorCode>
                <S.LockDisplay>
                    <S.Lock onClick={() => { updateLockArray(1)}}>
                        <LockIcon height="18px" />
                    </S.Lock>
                    {lock1}
                    </S.LockDisplay>
                <EditCanvas color={palette[1]} setEditedColor={setEditedColor} visible={canvas1}/>
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
                    <S.Lock onClick={() => { updateEditedColor(2)}}>
                        <EditIcon height="18px" />
                    </S.Lock>
                </S.ColorCode>
                <S.LockDisplay>
                    <S.Lock onClick={() => { updateLockArray(2)}}>
                        <LockIcon height="18px" />
                    </S.Lock>
                    {lock2}
                </S.LockDisplay>
                <EditCanvas color={palette[2]} setEditedColor={setEditedColor} visible={canvas2}/>
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
                    <S.Lock onClick={() => { updateEditedColor(3)}}>
                        <EditIcon height="18px" />
                    </S.Lock>
                </S.ColorCode>
                <S.LockDisplay>
                    <S.Lock onClick={() => { updateLockArray(3)}}>
                        <LockIcon height="18px" />
                    </S.Lock>
                    {lock3}
                </S.LockDisplay>
                <EditCanvas color={palette[3]} setEditedColor={setEditedColor} visible={canvas3}/>
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
                    <S.Lock onClick={() => { updateEditedColor(4)}}>
                        <EditIcon height="18px" />
                    </S.Lock>
                </S.ColorCode>
                <S.LockDisplay>
                    <S.Lock onClick={() => { updateLockArray(4)}}>
                        <LockIcon height="18px" />
                    </S.Lock>
                    {lock4}
                    </S.LockDisplay>
                <EditCanvas color={palette[4]} setEditedColor={setEditedColor} visible={canvas4}/>
            </S.Color>
        </S.Colors>

        {/* COLOR BLIND PALETTE */}

        <S.ColorBlindColors visible={colorBlindnessVisible}>
            <S.PaletteTitle className = {DarkMode}>Color blinds see the palette like this:</S.PaletteTitle>
            <S.ColorBlindPalette>
                <S.Color colorHex={getColorBlindSimulation(palette[0], colorBlindness)}>
                    <S.ColorCode>
                    {getColorBlindSimulation(palette[0], colorBlindness)}
                        <S.Copy
                        onClick={() => {
                            navigator.clipboard.writeText(displayPaletteColors(0));
                        }}
                        >
                        <CopyIcon />
                        </S.Copy>
                    </S.ColorCode>
                </S.Color>


                <S.Color colorHex={getColorBlindSimulation(palette[1], colorBlindness)}>
                    <S.ColorCode>
                    {getColorBlindSimulation(palette[1], colorBlindness)}
                        <S.Copy
                        onClick={() => {
                            navigator.clipboard.writeText(displayPaletteColors(0));
                        }}
                        >
                        <CopyIcon />
                        </S.Copy>
                    </S.ColorCode>
                </S.Color>


                <S.Color colorHex={getColorBlindSimulation(palette[2], colorBlindness)}>
                    <S.ColorCode>
                    {getColorBlindSimulation(palette[2], colorBlindness)}
                        <S.Copy
                        onClick={() => {
                            navigator.clipboard.writeText(displayPaletteColors(0));
                        }}
                        >
                        <CopyIcon />
                        </S.Copy>
                    </S.ColorCode>
                </S.Color>


                <S.Color colorHex={getColorBlindSimulation(palette[3], colorBlindness)}>
                    <S.ColorCode>
                    {getColorBlindSimulation(palette[3], colorBlindness)}
                        <S.Copy
                        onClick={() => {
                            navigator.clipboard.writeText(displayPaletteColors(0));
                        }}
                        >
                        <CopyIcon />
                        </S.Copy>
                    </S.ColorCode>
                </S.Color>


                <S.Color colorHex={getColorBlindSimulation(palette[4], colorBlindness)}>
                    <S.ColorCode>
                    {getColorBlindSimulation(palette[4], colorBlindness)}
                        <S.Copy
                        onClick={() => {
                            navigator.clipboard.writeText(displayPaletteColors(0));
                        }}
                        >
                        <CopyIcon />
                        </S.Copy>
                    </S.ColorCode>
                </S.Color>
            </S.ColorBlindPalette>
        </S.ColorBlindColors>
    </S.Container>
  );
};
