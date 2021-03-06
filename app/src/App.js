import React from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Login from './components/Login';
import DadzJokes from './components/Content';

const margin = {
  margin: '1rem',
};

const Intro = () => {
  return (
    <StyledIntro>
      <h2>Would you like to see some dad jokes?</h2>
      <NavLink to='/login'>Log in!</NavLink>
    </StyledIntro>
  );
};

const App = () => {
  return (
    <div style={margin}>
      <Navbar />

      <Route path='/' exact component={Intro} />

      <Route path='/signup' component={Signup} />

      <Route path='/login' render={pr => <Login {...pr} />} />

      <Route
        path='/jokes'
        render={pr =>
          localStorage.getItem('user_token') ? (
            <DadzJokes {...pr} />
          ) : (
            <Redirect to='/login' />
          )
        }
      />
    </div>
  );
};

export default App;

const StyledIntro = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
  }
  a {
    text-align: center;
  }
`;
