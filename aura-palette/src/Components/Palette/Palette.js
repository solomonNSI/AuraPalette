import React, { useState, useRef, useEffect } from "react";
import { ExportIcon } from "../../Icons/ExportIcon";
import { CopyIcon } from "../../Icons/CopyIcon";
import { LockIcon } from "../../Icons/LockIcon";
import { EditIcon } from "../../Icons/EditIcon";
import * as S from "./style";
import {
  hexToHSLWriter,
  hexToRgbWriter,
} from "../../Helpers/ColorCodes";
import { EditCanvas } from "../EditCanvas/EditCanvas";

export const Palette = ({ palette, lock, setLock, setHarmony, setEditedColorIndex, setEditedColor }) => {
    const [colorMode, setColorMode] = useState("HEX");
    const [lock0, setLock0] = useState("Not locked");
    const [lock1, setLock1] = useState("Not locked");
    const [lock2, setLock2] = useState("Not locked");
    const [lock3, setLock3] = useState("Not locked");
    const [lock4, setLock4] = useState("Not locked");

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
            case 3: {         
                if (lock[4]) return setLock4("Locked");
                return setLock4("Not Locked");
            }
        }  
    }

    function updateEditedColor(index) {
        setHarmony("Edit");      
        switch(index) {
            case 0: return setEditedColorIndex(0);
            case 1: return setEditedColorIndex(1);
            case 2: return setEditedColorIndex(2);
            case 3: return setEditedColorIndex(3);
            case 4: return setEditedColorIndex(4);
        }
    }

    return (
    <S.Container>
        <S.Header>
            <S.PaletteTitle>Palette</S.PaletteTitle>
            <S.ColorModeButton onClick={changeColorMode}>
            Color Mode: {colorMode}
            </S.ColorModeButton>
            <S.StyledStarIcon height="20px" />
            <ExportIcon height="20px" />
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
                    <S.Lock onClick={() => { updateLockArray(0); }}>
                    <LockIcon height="18px" />
                    </S.Lock>
                    <S.Lock onClick={() => { updateEditedColor(0) }}>
                        <EditIcon height="18px" />
                    </S.Lock>
                </S.ColorCode>
                <S.LockDisplay>{lock0}</S.LockDisplay>
                <EditCanvas color={palette[0]} setEditedColor={setEditedColor}/>
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
                    <S.Lock onClick={() => { updateLockArray(1)}}>
                    <LockIcon height="18px" />
                    </S.Lock>
                    <S.Lock onClick={() => { updateEditedColor(1)}}>
                        <EditIcon height="18px" />
                    </S.Lock>
                </S.ColorCode>
                <S.LockDisplay>{lock1}</S.LockDisplay>
                <EditCanvas color={palette[1]} setEditedColor={setEditedColor}/>
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
                    <S.Lock onClick={() => { updateLockArray(2)}}>
                    <LockIcon height="18px" />
                    </S.Lock>
                    <S.Lock onClick={() => { updateEditedColor(2)}}>
                        <EditIcon height="18px" />
                    </S.Lock>
                </S.ColorCode>
                <S.LockDisplay>{lock2}</S.LockDisplay>
                <EditCanvas color={palette[2]} setEditedColor={setEditedColor}/>
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
                    <S.Lock onClick={() => { updateLockArray(3)}}>
                        <LockIcon height="18px" />
                    </S.Lock>
                    <S.Lock onClick={() => { updateEditedColor(3)}}>
                        <EditIcon height="18px" />
                    </S.Lock>
                </S.ColorCode>
                <S.LockDisplay>{lock3}</S.LockDisplay>
                <EditCanvas color={palette[3]} setEditedColor={setEditedColor}/>
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
                    <S.Lock onClick={() => { updateLockArray(4)}}>
                    <LockIcon height="18px" />
                    </S.Lock>
                    <S.Lock onClick={() => { updateEditedColor(4)}}>
                        <EditIcon height="18px" />
                    </S.Lock>
                </S.ColorCode>
                <S.LockDisplay>{lock4}</S.LockDisplay>
                <EditCanvas color={palette[4]} setEditedColor={setEditedColor}/>
            </S.Color>
        </S.Colors>
    </S.Container>
  );
};
