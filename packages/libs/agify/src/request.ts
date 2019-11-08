import axios, { AxiosTransformer } from 'axios';

const client = axios.create({
  baseURL: 'https://api.agify.io/',
  transformRequest: [
    (data: any, headers: any) => {
      headers['Content-Type'] = 'application/json';
      headers.Accept = 'application/json';
      return data;
    },
    ...(axios.defaults.transformRequest as AxiosTransformer[]),
  ],
});

const request = (options: any, config?: any) => {
  const onSuccess = (response: any) => response.data;
  const onError = (error: any) => Promise.reject(error.response || error.message);

  return client(options, config)
    .then(onSuccess)
    .catch(onError);
};

export default request;
