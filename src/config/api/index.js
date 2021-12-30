import axios from 'axios';

export const API_HOST = axios.create({
  baseURL: 'http://api.bungadavi.brits-team.com:8080/api/v1/kurir',
  timeout: 5000,
});
