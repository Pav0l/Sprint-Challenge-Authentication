import React from 'react';
import styled from 'styled-components';

import Form from './shared/Form';
import SocialHeader from './shared/SocialHeader';

export default class Login extends React.Component {
  render() {
    return (
      <LoginContainer>
        <SocialHeader />
        <Form type='login' {...this.props} />
      </LoginContainer>
    );
  }
}

const LoginContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 200px;
`;
