import axios from 'axios';

const ROOT_URL = 'http://localhost:4000/';

export const instance = axios.create({ baseURL: ROOT_URL });
