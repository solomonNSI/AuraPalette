import React from "react";
import { hexToHSL, hslToHex } from "./ColorWizard";

const defaultBaseColor = "#0700D6";
const defaultPalette = [
    "#E3390B",
    "#EA0CED",
    defaultBaseColor,
    "#0CD4ED",
    "#7AE688",
  ];

export const getDefaultPalette = (palette, lock) => {
    if (!lock[0]) palette[0] = defaultPalette[0];
    if (!lock[1]) palette[1] = defaultPalette[1];
    if (!lock[2]) palette[2] = defaultPalette[2];
    if (!lock[3]) palette[3] = defaultPalette[3];
    if (!lock[4]) palette[4] = defaultPalette[4];
    return palette;
};

export const getComplementaryPalette = (palette, lock) => {
    const baseColorHex = palette[2] // take the middle color as the base
    const baseColorHSL = hexToHSL(baseColorHex);

    // Color [0] Darker Shade
    if (!lock[0]) {
        var temp = [...baseColorHSL];
        temp[2] =  Math.abs(baseColorHSL[2] - (100% + baseColorHSL[2] / 10) * 4);
        const color0 = hslToHex(temp[0], temp[1], temp[2]);
        palette[0] = color0;
    }

    // Color [1] Lighter Shade
    if (!lock[1]) {
        var temp1 = [...baseColorHSL];
        temp1[2] =  Math.abs(baseColorHSL[2] + (100% + baseColorHSL[2] / 10) * 4);
        const color1 = hslToHex(temp1[0], temp1[1], temp1[2]);
        palette[1] = color1;
    }

    var temp2 = [...baseColorHSL];
    // Color [3] Complimentary Color
    if (!lock[3]) {
        temp2[0] =  Math.abs(baseColorHSL[0] + 180);
        const complimentaryColorHex = hslToHex(temp2[0], temp2[1], temp2[2]);
        palette[3] = complimentaryColorHex;
    }

    // Color [4] Complimentary Color Darker Shade
    if (!lock[4]) {
        var temp3 = [...temp2];
        temp3[2] = Math.abs(temp2[2] - (100% + temp2[2] / 10) * 4);
        const color4 = hslToHex(temp3[0], temp3[1], temp3[2]);
        palette[4] = color4;
    }
    return palette;
};

export const getMonochromaticPalette = (palette, lock) => {
    const baseColorHex = palette[2] // take the middle color as the base
    const baseColorHSL = hexToHSL(baseColorHex);

    // Color [0] Darker Shade 2
    if (!lock[0]) {
        var temp = [...baseColorHSL];
        temp[2] =  Math.abs(baseColorHSL[2] - (100% + baseColorHSL[2] / 10) * 16);
        const color0 = hslToHex(temp[0], temp[1], temp[2]);
        palette[0] = color0;
    }

    // Color [1] Darker Shade 1
    if (!lock[1]) {
        var temp1 = [...baseColorHSL];
        temp1[2] =  Math.abs(baseColorHSL[2] - (100% + baseColorHSL[2] / 10) * 8);
        const color1 = hslToHex(temp1[0], temp1[1], temp1[2]);
        palette[1] = color1;
    }

    // Color [3] Lighter Shade 1
    if (!lock[3]) {
        var temp2 = [...baseColorHSL];
        temp2[2] =  Math.abs(baseColorHSL[2] + (100% + baseColorHSL[2] / 10) * 8);
        const color2 = hslToHex(temp2[0], temp2[1], temp2[2]);
        palette[3] = color2;
    }

    // Color [4] Lighter Shade 2
    if (!lock[4]) {
        var temp3 = [...baseColorHSL];
        temp3[2] =  Math.abs(baseColorHSL[2] + (100% + baseColorHSL[2] / 10) * 16);
        const color3 = hslToHex(temp3[0], temp3[1], temp3[2]);
        palette[4] = color3;
    }

    return palette;
};

export const getAnalogousPalette = (palette, lock) => {
    const baseColorHex = palette[2] // take the middle color as the base
    const baseColorHSL = hexToHSL(baseColorHex);

    // Color [0]
    if (!lock[0]) {
        var temp = [...baseColorHSL];
        temp[0] =  Math.abs(baseColorHSL[0] + 30);
        const color0 = hslToHex(temp[0], temp[1], temp[2]);
        palette[0] = color0;
    }

    // Color [1]
    if (!lock[1]) {
        var temp1 = [...baseColorHSL];
        temp1[0] =  Math.abs(baseColorHSL[0] + 15);
        const color1 = hslToHex(temp1[0], temp1[1], temp1[2]);
        palette[1] = color1;
    }

    // Color [3]
    if (!lock[3]) {
        var temp2 = [...baseColorHSL];
        temp2[0] =  Math.abs(baseColorHSL[0] - 15);
        const color2 = hslToHex(temp2[0], temp2[1], temp2[2]);
        palette[3] = color2;
    }

    // Color [4]
    if (!lock[4]) {
        var temp3 = [...baseColorHSL];
        temp3[0] =  Math.abs(baseColorHSL[0] - 30);
        const color3 = hslToHex(temp3[0], temp3[1], temp3[2]);
        palette[4] = color3;
    }

    return palette;
};


export const getTriadsPalette = (palette, lock) => {
    const baseColorHex = palette[2] // take the middle color as the base
    const baseColorHSL = hexToHSL(baseColorHex);

    // Color [0] Triad 1
    if (!lock[0]) {
        var temp = [...baseColorHSL];
        temp[0] =  Math.abs(baseColorHSL[0] + 120);
        const color0 = hslToHex(temp[0], temp[1], temp[2]);
        palette[0] = color0;
    }

    // Color [1] Darker Shade 1
    if (!lock[1]) {
        var temp1 = [...baseColorHSL];
        temp1[2] =  Math.abs(baseColorHSL[2] - (100% + baseColorHSL[2] / 10) * 8);
        const color1 = hslToHex(temp1[0], temp1[1], temp1[2]);
        palette[1] = color1;
    }

    var temp2 = [...baseColorHSL];
    // Color [3] Triad 2
    if (!lock[3]) {
        temp2[0] =  Math.abs(baseColorHSL[0] - 120);
        const color2 = hslToHex(temp2[0], temp2[1], temp2[2]);
        palette[3] = color2;
    }

    // Color [4] Darker Shade Triad 2 
    if (!lock[4]) {
        var temp3 = [...temp2];
        temp3[2] =  Math.abs(temp2[2] - (100% + temp2[2] / 10) * 8);
        const color3 = hslToHex(temp3[0], temp3[1], temp3[2]);
        palette[4] = color3;
    }

    return palette;
};

export const getSplitComplementaryPalette = (palette, lock) => {
    const baseColorHex = palette[2] // take the middle color as the base
    const baseColorHSL = hexToHSL(baseColorHex);
    var temp = [...baseColorHSL];

    // Color [0] Split Complementary 1
    if (!lock[0]) {
        temp[0] =  Math.abs(baseColorHSL[0] + 150);
        const color0 = hslToHex(temp[0], temp[1], temp[2]);
        palette[0] = color0;
    }

    // Color [1] Darker Shade Split Complementary 1
    if (!lock[1]) {
        var temp1 = [...temp];
        temp1[2] =  Math.abs(temp[2] - (100% + temp[2] / 10) * 8);
        const color1 = hslToHex(temp1[0], temp1[1], temp1[2]);
        palette[1] = color1;
    }

    var temp2 = [...baseColorHSL];
    // Color [3] Split Complementary 2
    if (!lock[3]) {
        temp2[0] =  Math.abs(baseColorHSL[0] + 210);
        const color2 = hslToHex(temp2[0], temp2[1], temp2[2]);
        palette[3] = color2;
    }

    // Color [4] Darker Shade Split Complementary 2 
    if (!lock[4]) {
        var temp3 = [...temp2];
        temp3[2] =  Math.abs(temp2[2] - (100% + temp2[2] / 10) * 8);
        const color3 = hslToHex(temp3[0], temp3[1], temp3[2]);
        palette[4] = color3;
    }

    return palette;
};

export const getSquarePalette = (palette, lock) => {
    const baseColorHex = palette[2] // take the middle color as the base
    const baseColorHSL = hexToHSL(baseColorHex);

    // Color [0]
    if (!lock[0]) {
        var temp = [...baseColorHSL];
        temp[2] =  Math.abs(baseColorHSL[2] - (100% + baseColorHSL[2] / 10) * 8);
        const color0 = hslToHex(temp[0], temp[1], temp[2]);
        palette[0] = color0;
    }

    // Color [1]
    if (!lock[1]) {
        var temp1 = [...baseColorHSL];
        temp1[0] =  Math.abs(baseColorHSL[0] + 90);
        const color1 = hslToHex(temp1[0], temp1[1], temp1[2]);
        palette[1] = color1;
    }

    // Color [3]
    if (!lock[3]) {
        var temp2 = [...baseColorHSL];
        temp2[0] =  Math.abs(baseColorHSL[0] + 180);
        const color2 = hslToHex(temp2[0], temp2[1], temp2[2]);
        palette[3] = color2;
    }

    // Color [4]
    if (!lock[4]) {
        var temp3 = [...baseColorHSL];
        temp3[0] =  Math.abs(baseColorHSL[0] + 270);
        const color3 = hslToHex(temp3[0], temp3[1], temp3[2]);
        palette[4] = color3;
    }

    return palette;
};

