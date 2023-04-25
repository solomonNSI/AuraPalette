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
import { getColorForMedium } from "../../Helpers/Medium";

export const Palette = ({ palette, lock, setLock, setHarmony, harmony, setEditedColorIndex, setEditedColor, colorBlindness, medium, DarkMode }) => {
    const [colorMode, setColorMode] = useState("HEX");
    const [lock0, setLock0] = useState("Not locked");
    const [lock1, setLock1] = useState("Not locked");
    const [lock2, setLock2] = useState("Not locked");
    const [lock3, setLock3] = useState("Not locked");
    const [lock4, setLock4] = useState("Not locked");

    const [visibility, setVisibility] = useState([false, false, false, false, false]);
    const [colorBlindnessVisible, setColorBlindnessVisible] = useState(false);
    const [mediumVisible, setMediumVisible] = useState(false);

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
        if(colorBlindness === "None") {
            setColorBlindnessVisible(false);
            if (medium !== "Default") setMediumVisible(true);
        }
        else {
            setColorBlindnessVisible(true);
            setMediumVisible(false);
        }
    }, [colorBlindness, harmony, lock0, lock1, lock2, lock3, lock4]);


    useEffect(() => {
        if(medium === "Default") {
            setMediumVisible(false);
            if (colorBlindness !== "None") setColorBlindnessVisible(true);
        }
        else {
            setMediumVisible(true);
            setColorBlindnessVisible(false);
        }
     }, [medium, harmony, lock0, lock1, lock2, lock3, lock4]);

    function renderBlindColors(){
        var blindColors = [];
        for (var i = 0; i < 5; i++) {
            blindColors.push(
                <S.Color colorHex={getColorBlindSimulation(palette[i], colorBlindness)}>
                    <S.ColorCode>
                    {getColorBlindSimulation(palette[i], colorBlindness)}
                        <S.Copy
                        onClick={() => {
                            navigator.clipboard.writeText(displayPaletteColors(i));
                        }}
                        >
                        <CopyIcon />
                        </S.Copy>
                    </S.ColorCode>
                </S.Color>
            );
        }
        return blindColors;
    }

    function renderMediumColors(){
        var mediumColors = [];
        for (var i = 0; i < 5; i++) {
            mediumColors.push(
                <S.Color colorHex={getColorForMedium(palette[i], medium)}>
                    <S.ColorCode>
                    {getColorForMedium(palette[i], medium)}
                        <S.Copy
                        onClick={() => {
                            navigator.clipboard.writeText(displayPaletteColors(i));
                        }}
                        >
                        <CopyIcon />
                        </S.Copy>
                    </S.ColorCode>
                </S.Color>
            );
        }
        return mediumColors;
    }

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
                <EditCanvas id={4} color={palette[4]} setEditedColor={setEditedColor} visible={visibility[4]}/>
            </S.Color>
        </S.Colors>

        {/* COLOR BLIND PALETTE */}
        <S.ColorBlindColors visible={colorBlindnessVisible}>
            <S.PaletteTitle className = {DarkMode}>Color blinds of type {colorBlindness} see the palette like this:</S.PaletteTitle>
            <S.ColorBlindPalette>
                {renderBlindColors()}
            </S.ColorBlindPalette>
        </S.ColorBlindColors>

        {/* MEDIUMS PALETTE */}
        <S.MediumColors visible={mediumVisible}>
            <S.PaletteTitle className = {DarkMode}>For medium {medium} we suggest this palette:</S.PaletteTitle>
            <S.ColorBlindPalette>
                {renderMediumColors()}
            </S.ColorBlindPalette>
        </S.MediumColors>

    </S.Container>
  );
};
