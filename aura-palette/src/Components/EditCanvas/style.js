import React from "react";
import styled, { css } from "styled-components";

export const ColorPicker = styled.div`
    position: relative;
    top: 27%;   
    background-color: transparent;
    margin: 0px 20%;
    z-index: 1;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1200px) {
        transform: rotate(270deg);
        height: 50%;
        top: 40%;   
    }

    @media screen and (max-width: 900px) {
        transform: rotate(270deg);
        height: 40%;
        top: 40%;   
        margin: 0px 30%;
    }

    #color-block {
        border-radius: 8px 0px 0px 8px;
    }

    #color-strip {
        border-radius: 0px 8px 8px 0px;
    }

  ${({ visible }) => {
        return css`
            visibility: ${visible ? 'visible' : 'hidden'};
        `;
    }}
`;

