import React from 'react';
import styled from 'styled-components';
import { FiPlus, FiMinus, FiDivide, FiPercent } from 'react-icons/fi';
import { MdClear } from 'react-icons/md';
import { TiEquals } from 'react-icons/ti';
import { HiOutlineSwitchVertical } from 'react-icons/hi';
import { BsDot } from 'react-icons/bs';

const Keypad = ({ state, dispatch }) => {
  const onClickNumber = ({ target }) => {
    console.dir(target.innerText);
    dispatch({ type: 'Input', number: target.innerText });
  };

  const onTogglePlusMinus = () => {
    console.log('add + or -');
    dispatch({ type: 'Toggle' });
  };
  const onAdd = () => {
    console.log('Add!');
    dispatch({ type: 'Add' });
  };
  const onSubtract = () => {
    console.log('Subtract');
    dispatch({ type: 'Subtract' });
  };
  const onDivide = () => {
    console.log('Divide!');
    dispatch({ type: 'Divide' });
  };
  const onMultiply = () => {
    console.log('Multiply');
    dispatch({ type: 'Multiply' });
  };
  const onPercent = () => {
    console.log('Divide num by 100!');
    dispatch({ type: 'Percent' });
  };
  const onAddDot = () => {
    console.log('Add Dot(.)');
    dispatch({ type: 'Dot' });
  };
  const onResult = () => {
    console.log('Finish!');
    dispatch({ type: 'Result' });
  };
  const onClear = () => {
    state.isCalculate ? console.log('clear!') : console.log('All clear!');
  };

  return (
    <StKeypad>
      <StKey onClick={onClear}>AC</StKey>
      <StKey onClick={onTogglePlusMinus}>
        <HiOutlineSwitchVertical />
      </StKey>
      <StKey onClick={onPercent}>
        <FiPercent />
      </StKey>
      <StKey onClick={onDivide}>
        <FiDivide />
      </StKey>
      <StKey onClick={onClickNumber}>7</StKey>
      <StKey onClick={onClickNumber}>8</StKey>
      <StKey onClick={onClickNumber}>9</StKey>
      <StKey onClick={onMultiply}>
        <MdClear />
      </StKey>
      <StKey onClick={onClickNumber}>4</StKey>
      <StKey onClick={onClickNumber}>5</StKey>
      <StKey onClick={onClickNumber}>6</StKey>
      <StKey onClick={onSubtract}>
        <FiMinus />
      </StKey>
      <StKey onClick={onClickNumber}>1</StKey>
      <StKey onClick={onClickNumber}>2</StKey>
      <StKey onClick={onClickNumber}>3</StKey>
      <StKey onClick={onAdd}>
        <FiPlus />
      </StKey>
      <StKey onClick={onClickNumber}>0</StKey>
      <StKey onClick={onClickNumber}>000</StKey>
      <StKey onClick={onAddDot}>
        <BsDot />
      </StKey>
      <StKey onClick={onResult}>
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
  /* border: 1px solid red; */
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
