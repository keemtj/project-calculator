import React, { useReducer } from 'react';
import styled from 'styled-components';
import Keypad from './Keypad';
import Viewer from './Viewer';

// 1. 연산하기 전 숫자를 만들어주는 함수
// 2. 연산중인 함수
// 3. 연산이 완료되면 setResult 업데이트

const initialState = {
  value: 0,
  save: 0,
  nextValue: 0,
  result: 0,
  isCalculate: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'Input':
      return {
        ...state,
        value:
          state.value === 0 ? '' + action.number : state.value + action.number,
        save:
          state.value === 0 ? '' + action.number : state.value + action.number,
      };
    case 'Add':
      return { value: state.value + 1 };
    case 'Subtract':
      return { value: state.value - 1 };
    case 'Divide':
      return { value: state.value / 2 };
    case 'Multiply':
      return { value: state.value * 2 };
    case 'Toggle':
      return { value: state.value * -1 };
    case 'Percent':
      return { value: state.value / 100 };
    case 'Dot':
      return { value: state.value + '.' };
    case 'Result':
      return {
        value: 0,
        save: state.value,
        nextValue: 0,
        result: state.value,
        isCalculate: true,
      };
    case 'Clear':
      return {
        value: 0,
        save: 0,
        nextValue: 0,
        result: 0,
        isCalculate: true,
      };
    case 'AllClear':
      return {
        value: 0,
        save: 0,
        nextValue: 0,
        result: 0,
        isCalculate: false,
      };
    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Glass>
      <Viewer state={state} />
      <Keypad state={state} dispatch={dispatch} />
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
