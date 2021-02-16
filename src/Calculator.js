import React from 'react';
import styled from 'styled-components';
import Keypad from './Keypad';
import Viewer from './Viewer';

const Calculator = () => {
  return (
    <Glass>
      <Viewer />
      <Keypad />
    </Glass>
  );
};

const Glass = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  width: 40vw;
  min-width: 55rem;
  height: auto;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.3)
  );
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(2rem);
`;

export default Calculator;
