import axios from 'axios';

const getRequest = (urlRequest = '', options = {}) => axios({
  method: 'get',
  url: urlRequest,
  responseType: 'application/json',
  ...options,
});

export const postRequest = (urlRequest = '', requestBody = {}, options = {}) =>
  axios({
    method: 'post',
    url: urlRequest,
    data: requestBody,
    responseType: 'application/json',
    ...options,
  });