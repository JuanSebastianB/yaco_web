const PERSON_PATH = '/person';
const SITE_PATH = "/site";

export const apiHostSite = (endpoint = '') =>
    `${SITE_PATH}${endpoint}`;

export const apiHostLogin = (endpoint = '') =>
  `${PERSON_PATH}${endpoint}`;