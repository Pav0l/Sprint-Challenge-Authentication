import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Navbar() {
  return (
    <StyledNavbar>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/jokes'>Jokes</NavLink>
      <NavLink to='/signup'>Signup</NavLink>
      <NavLink to='/login'>Login</NavLink>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.nav`
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  max-width: 400px;
  margin-bottom: 2rem;
`;
