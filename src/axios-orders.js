import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-from-react.firebaseio.com/',
});

export default instance;
