const getRequest = (urlRequest = '', options = {}) => ({
  method: 'get',
  url: urlRequest,
  responseType: 'application/json',
  ...options,
});
