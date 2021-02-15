import React from 'react';
import styled from 'styled-components';
import Calculator from './Calculator';
import Circle from './Circle';

const Background = () => {
  return (
    <>
      <StBackground>
        <Calculator />
      </StBackground>
      <Circle r={20} top={5} right={20} />
      <Circle r={20} bottom={5} left={20} />
    </>
  );
};

const StBackground = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
`;

export default Background;
