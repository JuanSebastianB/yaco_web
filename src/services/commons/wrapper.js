import axios from 'axios';

const defHeaders = {
    'Content-Type': 'application/json'
};

export const getRequest = (apiUrl = '', headers = {}) =>
    axios.get(apiUrl, {...defHeaders, headers});