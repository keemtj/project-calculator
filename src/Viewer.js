import React from 'react';
import styled from 'styled-components';

const Viewer = ({ state }) => {
  return <StViewer>{Number(state.result).toLocaleString()}</StViewer>;
};

const StViewer = styled.div`
  width: 100%;
  height: 10rem;
  margin: 2rem;
  padding: 2rem;
  font-size: 8rem;
  text-align: right;
`;

export default Viewer;
