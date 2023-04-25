import React from "react";
import { hexToHSL, hslToHex } from "./ColorWizard";

/*
    HSL COLOR SPACE
    color_hsl[0]: hue
    color_hsl[1]: saturation
    color_hsl[2]: luminance
*/

export const getColorForMedium = (color, medium) => {
    var color_hsl = hexToHSL(color);
    switch (medium) {
        case "Print": {
            // we limit saturation and luminance to 60 to avoid neon and bright colors
            // this way they will not distort in print (CMYK color space)
            const randomS = Math.floor(Math.random() * 60) + 1;
            const randomL = Math.floor(Math.random() * 60) + 1;
            color_hsl[1] = randomS;
            color_hsl[2] = randomL;
            break;
        }
        case "Website": {
            color_hsl[1] = 100; // highest saturation
            const randomL = Math.floor(Math.random() * 40) + 1;
            color_hsl[2] = randomL;
            break;
        }
        case "Video": { // make the color very vibrant
            const randomS = Math.floor(Math.random() * 70) + 1;
            if (randomS > color_hsl[1]) color_hsl[1] = randomS;
            color_hsl[2] = 50; // highest luminance
            // if (color_hsl[1] >= 100) color_hsl[1] = 100; // maximum number we can assign
            break;
        }
        default: return color;
    }
    return hslToHex(color_hsl[0], color_hsl[1], color_hsl[2]);
};