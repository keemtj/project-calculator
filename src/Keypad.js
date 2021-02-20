import React from 'react';
import styled from 'styled-components';
import { FiPlus, FiMinus, FiDivide, FiPercent } from 'react-icons/fi';
import { MdClear } from 'react-icons/md';
import { TiEquals } from 'react-icons/ti';
import { HiOutlineSwitchVertical } from 'react-icons/hi';
import { BsDot } from 'react-icons/bs';

const Keypad = ({ state, dispatch }) => {
  const onClickNumber = ({ target }) => {
    console.log(target.name);
    dispatch({ type: 'Number', number: target.name });
  };
  const onDot = () => {
    if (!state.number.includes('.')) {
      dispatch({ type: 'Dot' });
    }
  };
  const onClickAdd = () => {
    dispatch({ type: 'Add', operator: '+' });
  };
  const onClickSubtract = () => {
    dispatch({ type: 'Add', operator: '-' });
  };
  const onClickMultiply = () => {
    dispatch({ type: 'Add', operator: '*' });
  };
  const onClickDivide = () => {
    dispatch({ type: 'Add', operator: '/' });
  };
  const onClickResult = () => {
    dispatch({ type: 'Result' });
  };
  const onClear = () => {
    dispatch({ type: 'Clear' });
  };
  return (
    <StKeypad>
      <StKey onClick={onClear}>C</StKey>
      <StKey onClick={() => dispatch({ type: 'Negative' })}>
        <HiOutlineSwitchVertical />
      </StKey>
      <StKey onClick={() => dispatch({ type: 'Percent' })}>
        <FiPercent />
      </StKey>
      <StKey name="/" onClick={onClickDivide}>
        <FiDivide />
      </StKey>
      <StKey name="7" onClick={onClickNumber}>
        7
      </StKey>
      <StKey name="8" onClick={onClickNumber}>
        8
      </StKey>
      <StKey name="9" onClick={onClickNumber}>
        9
      </StKey>
      <StKey name="*" onClick={onClickMultiply}>
        <MdClear />
      </StKey>
      <StKey name="4" onClick={onClickNumber}>
        4
      </StKey>
      <StKey name="5" onClick={onClickNumber}>
        5
      </StKey>
      <StKey name="6" onClick={onClickNumber}>
        6
      </StKey>
      <StKey name="-" onClick={onClickSubtract}>
        <FiMinus />
      </StKey>
      <StKey name="1" onClick={onClickNumber}>
        1
      </StKey>
      <StKey name="2" onClick={onClickNumber}>
        2
      </StKey>
      <StKey name="3" onClick={onClickNumber}>
        3
      </StKey>
      <StKey name="+" onClick={onClickAdd}>
        <FiPlus />
      </StKey>
      <StKey name="0" onClick={onClickNumber}>
        0
      </StKey>
      <StKey name="000" onClick={onClickNumber}>
        000
      </StKey>
      <StKey onClick={onDot}>
        <BsDot />
      </StKey>
      <StKey onClick={onClickResult}>
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
