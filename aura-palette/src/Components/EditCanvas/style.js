import React from "react";
import styled, { css } from "styled-components";

export const ColorPicker = styled.div`
    position: relative;
    top: 110%;   
    background-color: white;
    height: 150px;
    width: 100%;
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

