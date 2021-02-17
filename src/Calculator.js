import React, { useState } from 'react';
import styled from 'styled-components';
import Keypad from './Keypad';
import Viewer from './Viewer';

// 1. 연산하기 전 숫자를 만들어주는 함수
// 2. 연산중인 함수
// 3. 연산이 완료되면 setResult 업데이트
const Calculator = () => {
  // result state
  const [result, setResult] = useState(0);

  return (
    <Glass>
      <Viewer result={result} />
      <Keypad setResult={setResult} />
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
