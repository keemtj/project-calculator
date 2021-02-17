import React from 'react';
import styled from 'styled-components';

const Viewer = ({ result }) => {
  return <StViewer>{result}</StViewer>;
};

const StViewer = styled.div`
  width: 100%;
  margin: 2rem;
  padding: 2rem;
  font-size: 8rem;
  text-align: right;
`;

export default Viewer;
