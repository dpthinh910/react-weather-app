import Axios, { AxiosRequestConfig } from 'axios';
import { API_KEY, API_HOST, BASE_URL } from 'src/config';

function authRequestInterceptor(config : AxiosRequestConfig) {
  if (!!API_KEY && !!API_HOST) {
    // eslint-disable-next-line no-param-reassign
    config.headers = {
      'x-rapidapi-host': API_HOST,
      'x-rapidapi-key': API_KEY
    }
  }
  return config;
}

const axios = Axios.create({
  baseURL: BASE_URL
})

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  response => response.data,
  error => {
    const message = error.response?.data?.errors[0] || error.message;
    // eslint-disable-next-line no-console
    console.log('Axios error mess: ', message);
    return Promise.reject(error);
  }
)

export default axios;