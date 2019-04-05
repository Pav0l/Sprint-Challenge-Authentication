import axios from 'axios';
import routingInfo from './routes';

const { url, port, register } = routingInfo;

const createNewUser = (username, password) => {
  axios
    .post(`${url}:${port}${register}`, {
      username,
      password,
    })
    .then(res => console.log(res.data))
    .catch(err => console.error('Error: ', err));
};

export default createNewUser;
