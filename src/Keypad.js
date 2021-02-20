import React from 'react';
import styled from 'styled-components';
import { FiPlus, FiMinus, FiDivide, FiPercent } from 'react-icons/fi';
import { MdClear } from 'react-icons/md';
import { TiEquals } from 'react-icons/ti';
import { HiOutlineSwitchVertical } from 'react-icons/hi';
import { BsDot } from 'react-icons/bs';

const Keypad = () => {
  return (
    <StKeypad>
      <StKey>{'C'}</StKey>
      <StKey>
        <HiOutlineSwitchVertical />
      </StKey>
      <StKey>
        <FiPercent />
      </StKey>
      <StKey>
        <FiDivide />
      </StKey>
      <StKey>7</StKey>
      <StKey>8</StKey>
      <StKey>9</StKey>
      <StKey>
        <MdClear />
      </StKey>
      <StKey>4</StKey>
      <StKey>5</StKey>
      <StKey>6</StKey>
      <StKey>
        <FiMinus />
      </StKey>
      <StKey>1</StKey>
      <StKey>2</StKey>
      <StKey>3</StKey>
      <StKey>
        <FiPlus />
      </StKey>
      <StKey>0</StKey>
      <StKey>000</StKey>
      <StKey>
        <BsDot />
      </StKey>
      <StKey>
        <TiEquals />
      </StKey>
    </StKeypad>
  );
};

const StKeypad = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

const StKey = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  width: 10rem;
  height: 10rem;
  border-radius: 2rem;
  font-size: 3rem;
  color: grey;
  cursor: pointer;
  outline: none;

  &:hover {
    border-top: 2px solid rgba(255, 255, 255, 0.5);
    border-left: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 2rem;
    backdrop-filter: blur(2rem);
    color: black;
  }
`;

export default Keypad;
