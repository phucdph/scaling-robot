import axios from 'axios';
import env from '../configs/env';

const instance = axios.create({
  baseURL: env.REACT_APP_API_BASE_URL,
  timeout: 30 * 60 * 1000,
});

export default instance;
export * from 'axios';
