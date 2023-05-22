import _axios from 'axios';

const axios = baseURL => {
  const instance = _axios.create({
    baseURL:
      "http://localhost:3001",
    timeout: 10000,
  });

  instance.interceptors.request.use(
    config => {
      const jwToken = global.auth.getToken();
      config.headers['Authorization'] = 'Bearer ' + jwToken;
      // Do something before request is sent
      return config;
    },
    error => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  return instance;
};

export { axios };

export default axios();
