import React from "react";
import styled, { css } from "styled-components";

export const ColorPicker = styled.div`
    position: relative;
    top: 110%;   
    background-color: white;
    height: 150px;
    width: 180px;

  ${({ visible }) => {
        return css`
            visibility: ${visible ? 'visible' : 'hidden'};
        `;
    }}
`;

