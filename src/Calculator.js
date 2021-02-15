import React from 'react';
import styled from 'styled-components';

const Calculator = () => {
  return <Glass></Glass>;
};

const Glass = styled.section`
  width: 40%;
  min-height: 80vh;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(2rem);
`;

export default Calculator;
