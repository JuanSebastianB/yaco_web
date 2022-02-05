import { postRequest } from "../commons/wrapper";
import { apiHostLogin } from "../commons/paths";

export const postLoginService = (bodyRequest = {}) =>
  postRequest(apiHostLogin("/login-user"), bodyRequest);
