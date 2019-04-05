import axios from 'axios';
import routingInfo from './routes';

const { url, port, login } = routingInfo;

const loginUser = (username, password) => {
  axios
    .post(`${url}:${port}${login}`, { username, password })
    .then(res => {
      console.log(res.data);
      localStorage.setItem('user_token', res.data.token);
    })
    .catch(err => console.error('Error: ', err));
};

export default loginUser;
