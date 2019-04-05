import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import axios from 'axios';

// import request function/object
import customAxios from '../middleware/setHeader';
import routingInfo from '../requests/routes';

const { url, port, jokes: jokesRoute } = routingInfo;
// create a cancel token using the CancelToken.source
// const CancelToken = axios.CancelToken;
// const source = CancelToken.source();

export default function DadzJokes({ history }) {
  const [jokes, getJokes] = useState([]);

  useEffect(() => {
    getDadJokes();

    // useEffect cleanup function to cancel the request
    // if the user changes the route while the request is beying resolved
    // return function cleanup() {
    //   source.cancel();
    // };
  }, []);

  function getDadJokes() {
    customAxios()
      .get(`${url}:${port}${jokesRoute}`, {
        // cancel a request using a cancel token.
        // cancelToken: source.token,
      })
      .then(res => getJokes(res.data))
      .catch(err => console.log(err));
  }

  function logoutClick() {
    localStorage.removeItem('user_token');
    history.replace('/');
  }

  if (jokes.length === 0) {
    return <h3>Fetching some jokes for you...</h3>;
  }

  return (
    <div>
      <button onClick={logoutClick}>Log Out</button>
      <h3>{jokes.length} jokes found</h3>
      <div>
        {jokes &&
          jokes.map(joke => <JokeWrap key={joke.id}>{joke.joke}</JokeWrap>)}
      </div>
    </div>
  );
}

const JokeWrap = styled.div`
  margin-bottom: 0.5rem;
  border: 1px solid #eff0f1;
  border-radius: 4px;
  padding: 1rem;
`;
