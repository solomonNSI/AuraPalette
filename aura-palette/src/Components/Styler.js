import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes for spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Define styles for Spinner
const SpinnerStyled = styled.div`
  border: 16px solid #888888;
  border-top: 16px solid #3498db00;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -60px;
  z-index: 1001;
`;

// Define styles for Overlay
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

// Define SpinnerOverlay component
const SpinnerOverlay = () => {
  return (
    <>
      <SpinnerStyled />
      <Overlay />
    </>
  );
};

export default SpinnerOverlay;
