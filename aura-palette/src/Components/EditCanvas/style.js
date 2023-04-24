import React from "react";
import styled, { css } from "styled-components";

export const Canvas = styled.canvas`
  position: relative;
  top: 110%;

  ${({ visible }) => {
        return css`
            visibility: ${visible ? 'visible' : 'hidden'};
        `;
    }}
`;