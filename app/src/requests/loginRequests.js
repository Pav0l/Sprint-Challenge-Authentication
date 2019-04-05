import axios from 'axios';
import routingInfo from './routes';

const { url, port, login } = routingInfo;

const loginUser = (username, password, props) => {
  axios
    .post(`${url}:${port}${login}`, { username, password })
    .then(res => {
      console.log(res.data);
      localStorage.setItem('user_token', res.data.token);
    })
    .then(() => props.history.replace('/jokes'))
    .catch(err => console.error('Error: ', err));
};

export default loginUser;
