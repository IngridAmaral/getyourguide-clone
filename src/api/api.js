import axios from 'axios';

export const ROOT_URL = 'http://localhost:4000/';

export const api = axios.create({ baseURL: process.env.ROOT_URL || '/' });
