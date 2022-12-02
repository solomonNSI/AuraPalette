import React from "react";

// HELPER FUNCTIONS
/*
   This function converts hex values to rgb
   It is taken from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb 
*/
export function hexToRgb(hex) {
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
export function componentToHex(c) {
   var hex = c.toString(16);
   return hex.length == 1 ? "0" + hex : hex;
 }
 
export function rgbToHex(r, g, b) {
   return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
 
/*
   This function converts RGB values to HSL values.
   It is taken from https://stackoverflow.com/questions/41524641/draw-saturation-brightness-gradient
*/
export function rgbToHSL(red, green, blue, result = {}) {
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

/*
   This function converts HSL values to RGB values.
   It is taken from https://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
*/
export function hslToRgb(h, s, l){
   var r, g, b;

   if(s == 0){
       r = g = b = l; // achromatic
   }else{
       var hue2rgb = function hue2rgb(p, q, t){
           if(t < 0) t += 1;
           if(t > 1) t -= 1;
           if(t < 1/6) return p + (q - p) * 6 * t;
           if(t < 1/2) return q;
           if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
           return p;
       }

       var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
       var p = 2 * l - q;
       r = hue2rgb(p, q, h + 1/3);
       g = hue2rgb(p, q, h);
       b = hue2rgb(p, q, h - 1/3);
   }

   return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

/*
   This function converts HSL values to hex values.
   It is taken from https://css-tricks.com/converting-color-spaces-in-javascript/
*/
export function hslToHex(h, s, l) {
   l /= 100;
   const a = s * Math.min(l, 1 - l) / 100;
   const f = n => {
     const k = (n + h / 30) % 12;
     const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
     return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
   };
   return `#${f(0)}${f(8)}${f(4)}`;
 }

export function hexToHSL(H) {
   // Convert hex to RGB first
   let r = 0, g = 0, b = 0;
   if (H.length == 4) {
     r = "0x" + H[1] + H[1];
     g = "0x" + H[2] + H[2];
     b = "0x" + H[3] + H[3];
   } else if (H.length == 7) {
     r = "0x" + H[1] + H[2];
     g = "0x" + H[3] + H[4];
     b = "0x" + H[5] + H[6];
   }
   // Then to HSL
   r /= 255;
   g /= 255;
   b /= 255;
   let cmin = Math.min(r,g,b),
       cmax = Math.max(r,g,b),
       delta = cmax - cmin,
       h = 0,
       s = 0,
       l = 0;
 
   if (delta == 0)
     h = 0;
   else if (cmax == r)
     h = ((g - b) / delta) % 6;
   else if (cmax == g)
     h = (b - r) / delta + 2;
   else
     h = (r - g) / delta + 4;
 
   h = Math.round(h * 60);
 
   if (h < 0)
     h += 360;
 
   l = (cmax + cmin) / 2;
   s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
   s = +(s * 100).toFixed(1);
   l = +(l * 100).toFixed(1);
 
   return [h, s, l];
 }