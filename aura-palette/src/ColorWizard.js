import React from "react";

/*
   We will calculate the color palette in this file
   by using a base color
*/

const baseColor = "#AE53D3";

export const colorList = ["#AE5353", "#4FA29E", baseColor, "#4BB29E", "#78AE92"];


// HELPER FUNCTIONS
/*
   This function converts hex values to rgb
   It is taken from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb 
*/
function hexToRgb(hex) {
   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
   return result ? {
     r: parseInt(result[1], 16),
     g: parseInt(result[2], 16),
     b: parseInt(result[3], 16)
   } : null;
}

/*
   This function converts rgb values to hex
   It is taken from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb 
*/
function componentToHex(c) {
   var hex = c.toString(16);
   return hex.length == 1 ? "0" + hex : hex;
 }
 
 function rgbToHex(r, g, b) {
   return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
 }
 
 
/*
   This function converts RGB values to HSL values.
   It is taken from https://stackoverflow.com/questions/41524641/draw-saturation-brightness-gradient
*/
   function rgbToHSL(red, green, blue, result = {}) {
   var hue, sat, lum, min, max, dif, r, g, b;
   r = red / 255;
   g = green / 255;
   b = blue / 255;
   min = Math.min(r, g, b);
   max = Math.max(r, g, b);
   lum = (min + max) / 2;
   if (min === max) {
         hue = 0;
         sat = 0;
   } else {
         dif = max - min;
         sat = lum > 0.5 ? dif / (2 - max - min) : dif / (max + min);
         switch (max) {
            case r:
               hue = (g - b) / dif;
               break;
            case g:
               hue = 2 + ((b - r) / dif);
               break;
            case b:
               hue = 4 + ((r - g) / dif);
               break;
            default: break;
         }
         hue *= 60;
         if (hue < 0) {
         hue += 360;
         }
   }
   result.lum = lum * 255;
   result.sat = sat * 255;
   result.hue = hue;
   return result;
}

