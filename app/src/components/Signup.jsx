import React from 'react';
import styled from 'styled-components';

import Form from './shared/Form';
import SocialHeader from './shared/SocialHeader';

export default class Signup extends React.Component {
  render() {
    return (
      <SignupContainer>
        <SocialHeader />
        <Form type='signup' />
      </SignupContainer>
    );
  }
}

const SignupContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 200px;
`;
