import axios from 'axios';

export const getRequest = (apiUrl = '') =>
    axios.get(apiUrl);