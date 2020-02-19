import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost/log-api/wp-json/'
});

export default instance;