import React from "react";
import styled, { css } from "styled-components";

export const ColorPicker = styled.div`
    position: relative;
    top: 24%;   
    background-color: transparent;
    height: 90%;
    width: 80%;
    margin: 0px 10%;
    z-index: 1;
    display: flex;
    justify-content: center;

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

