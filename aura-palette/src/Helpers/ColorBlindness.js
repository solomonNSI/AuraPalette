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
// const color = [1, 0, 0, 1];
const rgbToLms = [
  [17.8824, 43.5161, 4.1193, 0],
  [3.4557, 27.1554, 3.8671, 0],
  [0.02996, 0.18431, 1.4700, 0],
  [0, 0, 0, 1]
];

const lmsToRgb = [
  [0.0809, -0.1305, 0.1167, 0],
  [-0.0102, 0.0540, -0.1136, 0],
  [-0.0003, -0.0041, 0.6932, 0],
  [0, 0, 0, 1]
];

//In LMS space
const protanopia = [ // works
    [0, 2.02344, -2.52581, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
];
const deuteranopia = [ // works
    [1, 0, 0, 0],
    [0.4942, 0, 1.2483, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
];
const tritanopia = [ // not working
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [-0.3959, 0.8011, 0, 0],
    [0, 0, 0, 1]
];
const protanomaly = [ // not working
    [0.817,0.183,0.000],
    [0.333,0.667,0.000],
    [0.000,0.125,0.875],
    [0, 0, 0, 1]
];

export const getColorBlindSimulation = (color, type) => {
    var color_rgb = hexToRgb(color);
    const rgb_array = [color_rgb.r / 255, color_rgb.g / 255, color_rgb.b / 255, 1];
    var matrix_result;
    switch (type) {
        case "Protanopia": matrix_result = multiply(multiply(multiply(rgb_array, rgbToLms), protanopia), lmsToRgb); break;
        case "Protanomaly": matrix_result = multiply(multiply(multiply(rgb_array, rgbToLms), protanomaly), lmsToRgb); break;
        case "Deuteranopia": matrix_result = multiply(multiply(multiply(rgb_array, rgbToLms), deuteranopia), lmsToRgb); break;
        case "Deuteranomaly": matrix_result = multiply(multiply(multiply(rgb_array, rgbToLms), protanopia), lmsToRgb); break;
        case "Tritanopia": matrix_result = multiply(multiply(multiply(rgb_array, rgbToLms), tritanopia), lmsToRgb); break;
        case "Tritanomaly": matrix_result = multiply(multiply(multiply(rgb_array, rgbToLms), protanopia), lmsToRgb); break;
        case "Achromatopsia": matrix_result = multiply(multiply(multiply(rgb_array, rgbToLms), protanopia), lmsToRgb); break;
        default: return color;
    }
    return rgbToHex(Math.trunc(matrix_result[0]*255),Math.trunc(matrix_result[1]*255), Math.trunc(matrix_result[2]*255));
};