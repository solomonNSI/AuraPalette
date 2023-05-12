import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes for spinner animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Define styles for Spinner
const SpinnerStyled = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
  position: fixed;  // Adjust as needed
  top: 50%;  // Adjust as needed
  left: 50%;  // Adjust as needed
  margin-top: -60px;  // Adjust as needed
  margin-left: -60px;  // Adjust as needed
`;

// Define Spinner component
const Spinner = () => {
  return <SpinnerStyled />;
};

export default Spinner;
