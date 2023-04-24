import React, { useRef, useEffect } from "react";
import * as S from "./style";
import { hexToRgb, rgbToHex, rgbToHSL } from "../../Helpers/ColorWizard";

export const CANVAS_SIZE = 140;

export const EditCanvas = ({ id, color, setEditedColor, visible }) => {
    function drawGradient(r, g, b, context) {
        var col = rgbToHSL(r, g, b);
        var size = CANVAS_SIZE-1;
        
        var gradB = context.createLinearGradient(0, 0, 0, size);
        gradB.addColorStop(0, "white");
        gradB.addColorStop(1, "black");
        var gradC = context.createLinearGradient(0, 0, size, 0);
        gradC.addColorStop(0, `hsla(${Math.floor(col.hue)},100%,50%,0)`);
        gradC.addColorStop(1, `hsla(${Math.floor(col.hue)},100%,50%,1)`);

        context.fillStyle = gradB;
        context.fillRect(0, 0, size, size);
        context.fillStyle = gradC;
        context.globalCompositeOperation = "multiply";
        context.fillRect(0, 0, size, size);
        context.globalCompositeOperation = "source-over";
    }

    function updateColor(hex){
        setEditedColor(hex);
    }

    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.fillStyle = '#000000';
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        drawGradient(hexToRgb(color).r, hexToRgb(color).g, hexToRgb(color).b, context);

        canvas.addEventListener("click", function (e) {
            var imgData = context.getImageData(e.layerX, e.layerY, 1, 1);
            var hueR = imgData.data[0];
            var hueG = imgData.data[1];
            var hueB = imgData.data[2];
            
            updateColor(rgbToHex(hueR, hueG, hueB));
            localStorage.setItem("currentCanvas", id);
        });

    }, [])

    return (
        <S.Canvas ref={canvasRef} visible={visible} id="colorpicker" width={CANVAS_SIZE} height={CANVAS_SIZE}>
        Oops ... your browser doesn't support the HTML5 canvas element
        </S.Canvas>
  );
};
