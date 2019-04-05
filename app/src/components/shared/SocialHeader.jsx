import React from 'react';
import styled from 'styled-components';

export default function SocialHeader({...inputProps}) {

  return (
    <SocialContainer>
      <a href="https://accounts.google.com/servicelogin"><SocImg src="https://repl.it/public/images/google.png" alt="ggl"></SocImg></a>
      <a href="https://github.com/login"><SocImg src="https://repl.it/public/images/github.png" alt="gh"></SocImg></a>
      <a href="https://www.facebook.com/"><SocImg src="https://repl.it/public/images/facebook.png" alt="fb"></SocImg></a>
    </SocialContainer>
  );
}

const SocialContainer = styled.div`
  max-width: 200px;
  display: flex;
  justify-content: space-around;

  a {
    cursor: pointer;
    padding: 4px 7px;
    text-decoration: none;

    &:hover {
      background-color: rgb(217, 217, 217);
    }
  }
`;

const SocImg = styled.img`
  width: 24px;
  height: 24px;
`;
