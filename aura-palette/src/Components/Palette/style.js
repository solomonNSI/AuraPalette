import React from "react";
import styled from "styled-components";
import { StarIcon } from "../../Icons/StarIcon";

export const Container = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 80%;
  padding: 0 30px;
  margin-right: 65px;
`;

export const PaletteTitle = styled.h2`
  margin-right: auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const ColorModeButton = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 6px;
`;

export const StyledStarIcon = styled(StarIcon)`
  margin: 0 16px;
`;
