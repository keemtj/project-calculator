import React, { useReducer } from 'react';
import styled from 'styled-components';
import Keypad from './Keypad';
import Viewer from './Viewer';

const initialState = {
  number: 0,
  result: 0,
  operator: '',
  expression: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'Number': {
      return {
        ...state,
        number:
          state.number === 0
            ? '' + action.number
            : state.number + action.number,
        result:
          state.number === 0
            ? '' + action.number
            : state.number + action.number,
      };
    }
    case 'Negative':
      return {
        ...state,
        number: state.number * -1,
        result: state.number * -1,
      };
    case 'Percent':
      return {
        ...state,
        number: state.number / 100,
        result: state.number / 100,
      };
    case 'Dot':
      return {
        ...state,
        number: state.number + '.',
        result: state.number + '.',
      };

    case 'Add':
      return {
        ...state,
        number: 0,
        operator: action.operator,
        expression: state.expression + state.result + action.operator,
      };
    case 'Subtract':
      return {
        ...state,
        number: 0,
        operator: action.operator,
        expression: state.expression + state.result + action.operator,
      };
    case 'Multiply':
      return {
        ...state,
        number: 0,
        operator: action.operator,
        expression: state.expression + state.result + action.operator,
      };
    case 'Divide':
      return {
        ...state,
        number: 0,
        operator: action.operator,
        expression: state.expression + state.result + action.operator,
      };
    case 'Clear':
      return {
        ...state,
        number: 0,
        result: 0,
      };
    case 'Result':
      return {
        ...state,
        number: 0,
        result: eval(state.expression + state.number),
        operator: '',
        expression: '',
      };
    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
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
