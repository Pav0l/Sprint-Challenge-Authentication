import React from 'react';
import styled from 'styled-components';

export default function Input({ ...inputProps }) {
  const { name, clearInput } = inputProps;

  return (
    <InputWrapper>
      <StyledInput {...inputProps} />
      <StyledIconImg
        onClick={() => clearInput(name)}
        src='https://image.flaticon.com/icons/svg/148/148766.svg'
        alt='close-icon'
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  position: relative;
  max-width: 200px;
  max-height: 40px;
  margin-bottom: 0.5rem;
`;

const StyledIconImg = styled.img`
  max-width: 15px;
  cursor: pointer;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translate(0px, -50%);
`;

const StyledInput = styled.input`
  padding: 0.5rem 1.3rem;
  width: 100%;
  height: 40px;
  border: 1px solid #eff0f1;
  border-radius: 4px;

  &:focus {
    border: 1px solid lightblue;
  }
`;
