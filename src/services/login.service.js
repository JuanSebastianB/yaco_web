import { postRequest } from "./utils/http-configuration-requests";

export const requestLogin = (requestBody = {}) => {
  return postRequest('/login', requestBody);
};
