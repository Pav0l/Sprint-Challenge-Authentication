import React from 'react';
import styled from 'styled-components';

export default function Button({...inputProps}) {
  const { textValue } = inputProps;


  return (
    <StyledButton
      onClick={inputProps.onClick}
    >{textValue}</StyledButton>
  );
}

const StyledButton = styled.button`
  max-width: 200px;
  border: 1px solid lightblue;
  border-radius: 4px;
  padding: 0.5rem 1.5rem;
  background-color: lightblue;
  color: white;
  cursor: pointer;
  &:hover {
    border-color: navy;
    color: navy;
  }
`;
