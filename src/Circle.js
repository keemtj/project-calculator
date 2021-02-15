import React from 'react';
import styled from 'styled-components';

const Circle = ({ r, top, bottom, left, right }) => {
  return <StCircle r={r} top={top} bottom={bottom} left={left} right={right} />;
};

const StCircle = styled.div`
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  width: ${({ r }) => r}rem;
  height: ${({ r }) => r}rem;
  border-radius: 50%;
  position: absolute;
  top: ${({ top }) => top}%;
  bottom: ${({ bottom }) => bottom}%;
  left: ${({ left }) => left}%;
  right: ${({ right }) => right}%;
`;

export default Circle;
