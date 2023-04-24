import React from "react";
import { hexToRgb, rgbToHex } from "./ColorWizard";

// multiply by rows
function multiply(vector, matrix) {
    return [
        vector[0] * matrix[0][0] + vector[1] * matrix[0][1] + vector[2] * matrix[0][2] + vector[3] * matrix[0][3],
        vector[0] * matrix[1][0] + vector[1] * matrix[1][1] + vector[2] * matrix[1][2] + vector[3] * matrix[1][3],
        vector[0] * matrix[2][0] + vector[1] * matrix[2][1] + vector[2] * matrix[2][2] + vector[3] * matrix[2][3],
        vector[0] * matrix[3][0] + vector[1] * matrix[3][1] + vector[2] * matrix[3][2] + vector[3] * matrix[3][3],
    ];
}

//In RGB space 
// Below matrices are taken from https://dev.to/ndesmic/exploring-color-math-through-color-blindness-2m2h
const protanopiaRgb = [ // works
    [0.1121, 0.8853, -0.0005, 0],
    [0.1127, 0.8897, -0.0001, 0],
    [0.0045, 0.0000, 1.0019, 0],
    [0, 0, 0, 1]
];
const deuteranopiaRgb = [ // works
    [0.2920, 0.7054, -0.0003, 0],
    [0.2934, 0.7089, 0.0000, 0],
    [-0.02098, 0.02559, 1.0019, 0],
    [0, 0, 0, 1, 0]
];
const achromatopsia = [ // works
    [ 0.21, 0.72, 0.07, 0],
    [0.21, 0.72, 0.07, 0],
    [0.21, 0.72, 0.07, 0],
    [0, 0, 0, 1]
];

// Below are from https://gist.github.com/Lokno/df7c3bfdc9ad32558bb7
// It also has matrices for protanopia, deuteranopia, achromatopsia (debatable which one is more accurate)
const protanomaly = [
    [0.817,0.183,0.000, 0],
    [0.333,0.667,0.000, 0],
    [0.000,0.125,0.875, 0],
    [0, 0, 0, 1]
 ];
 const tritanopia = [
    [0.950,0.050,0.000, 0],
    [0.000,0.433,0.567, 0],
    [0.000,0.475,0.525, 0],
    [0.000,0, 0, 1],
 ];
const deuteranomaly = [
    [0.8, 0.2, 0.000, 0],
    [0.258,0.742,0.000, 0],
    [0.000,0.142,0.858, 0],
    [0.000,0, 0, 1],
];
const tritanomaly = [
    [0.967,0.033,0.00, 0],
    [0.00,0.733,0.267, 0],
    [0.00,0.183,0.817, 0], 
    [0.000,0, 0, 1],
];
const achromatomaly = [
    [0.618,0.320,0.062, 0],
    [0.163,0.775,0.062, 0],
    [0.163,0.320,0.516, 0],
    [0.000,0, 0, 1],
];

export const getColorBlindSimulation = (color, type) => {
    var color_rgb = hexToRgb(color);
    const rgb_array = [color_rgb.r / 255, color_rgb.g / 255, color_rgb.b / 255, 1];
    var matrix_result;
    switch (type) {
        case "Protanopia": matrix_result = multiply(rgb_array, protanopiaRgb); break;
        case "Protanomaly": matrix_result = multiply(rgb_array, protanomaly); break; 
        case "Deuteranopia": matrix_result = multiply(rgb_array, deuteranopiaRgb); break;
        case "Deuteranomaly": matrix_result = multiply(rgb_array, deuteranomaly); break;
        case "Tritanopia": matrix_result = multiply(rgb_array, tritanopia); break;
        case "Tritanomaly": matrix_result = multiply(rgb_array, tritanomaly); break;
        case "Achromatopsia": matrix_result = multiply(rgb_array, achromatopsia); break;
        case "Achromatomaly": matrix_result = multiply(rgb_array, achromatomaly); break;
        default: return color;
    }
    return rgbToHex(Math.trunc(matrix_result[0]*255),Math.trunc(matrix_result[1]*255), Math.trunc(matrix_result[2]*255));
};