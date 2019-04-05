import React, { useState, useEffect } from 'react';

// import request function/object
import customAxios from '../middleware/setHeader';
import routingInfo from '../requests/routes';

const { url, port, jokes: jokesRoute } = routingInfo;

export default function DadzJokes() {
  const [jokes, getJokes] = useState([]);

  useEffect(() => {
    customAxios()
      .get(`${url}:${port}${jokesRoute}`)
      .then(res => getJokes(res.data))
      .catch(err => console.log(err));
  }, []);

  if (jokes.length === 0) {
    return <h3>Fetching some jokes for you...</h3>;
  }

  return (
    <div>
      <p>{jokes.length} jokes found</p>
      <h3>Jokes:</h3>
      <div>
        {jokes && jokes.map(joke => <div key={joke.id}>{joke.joke}</div>)}
      </div>
    </div>
  );
}
