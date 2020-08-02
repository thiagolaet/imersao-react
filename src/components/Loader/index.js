import React from 'react';
import styled from 'styled-components';

const LoadField = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 300px;
`;

const Load = styled.div`
  border: 16px solid #f3f3f3;
  border-top: 16px solid var(--primary); 
  border-radius: 50%;
  width: 120px;
  align-self: center;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

function Loader () {
  return (
    <LoadField>
      <Load></Load>
    </LoadField>
  )
}

export default Loader;