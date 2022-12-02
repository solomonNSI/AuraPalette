import React from "react";
import { hexToHSL, hslToHex } from "./ColorWizard";

export const getComplementaryPalette = (palette) => {
  const baseColorHex = palette[2] // take the middle color as the base
  const baseColorHSL = hexToHSL(baseColorHex);

  // Color [0] Darker Shade
  var temp = [...baseColorHSL];
  temp[2] =  Math.abs(baseColorHSL[2] - (100% + baseColorHSL[2] / 10) * 4);
  const color0 = hslToHex(temp[0], temp[1], temp[2]);
  palette[0] = color0;

  // Color [1] Lighter Shade
  var temp1 = [...baseColorHSL];
  temp1[2] =  Math.abs(baseColorHSL[2] + (100% + baseColorHSL[2] / 10) * 4);
  const color1 = hslToHex(temp1[0], temp1[1], temp1[2]);
  palette[1] = color1;

  // Color [3] Complimentary Color
  var temp2 = [...baseColorHSL];
  temp2[0] =  Math.abs(baseColorHSL[0] + 180);
  const complimentaryColorHex = hslToHex(temp2[0], temp2[1], temp2[2]);
  palette[3] = complimentaryColorHex;

  // Color [4] Complimentary Color Darker Shade
  var temp3 = [...temp2];
  temp3[2] = Math.abs(temp2[2] - (100% + temp2[2] / 10) * 4);
  const color4 = hslToHex(temp3[0], temp3[1], temp3[2]);
  palette[4] = color4;

  return palette;
};

export const getAnalogousPalette = (palette) => {
  const baseColorHex = palette[2] // take the middle color as the base
  const baseColorHSL = hexToHSL(baseColorHex);

  // Color [0] Darker Shade 2
  var temp = [...baseColorHSL];
  temp[2] =  Math.abs(baseColorHSL[2] - (100% + baseColorHSL[2] / 10) * 16);
  const color0 = hslToHex(temp[0], temp[1], temp[2]);
  palette[0] = color0;

  // Color [1] Darker Shade 1
  var temp1 = [...baseColorHSL];
  temp1[2] =  Math.abs(baseColorHSL[2] - (100% + baseColorHSL[2] / 10) * 8);
  const color1 = hslToHex(temp1[0], temp1[1], temp1[2]);
  palette[1] = color1;

  // Color [3] Lighter Shade 1
  var temp2 = [...baseColorHSL];
  temp2[2] =  Math.abs(baseColorHSL[2] + (100% + baseColorHSL[2] / 10) * 8);
  const color2 = hslToHex(temp2[0], temp2[1], temp2[2]);
  palette[3] = color2;

  // Color [4] Lighter Shade 2
  var temp3 = [...baseColorHSL];
  temp3[2] =  Math.abs(baseColorHSL[2] + (100% + baseColorHSL[2] / 10) * 16);
  const color3 = hslToHex(temp3[0], temp3[1], temp3[2]);
  palette[4] = color3;

  return palette;
};