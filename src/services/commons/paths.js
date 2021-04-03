const LOGIN_PATH = "/login";
const SITE_PATH = "/site";

export const apiHostSite = (endpoint = '') =>
    `${SITE_PATH}${endpoint}`;

export const apiHostLogin = (endpoint = '') =>
  `${LOGIN_PATH}${endpoint}`;