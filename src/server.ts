import axios from 'axios';

export const tractianApi = axios.create({
  baseURL: 'fake-api.tractian.com',
  headers: {
      'Content-Type': 'application/json',
  },
});