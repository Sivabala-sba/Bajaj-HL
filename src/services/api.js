//api.js
import axios from 'axios';

const API_BASE_URL = 'http://bfhl-api.ap-south-1.elasticbeanstalk.com/bfhl';

export const getOperationCode = () => {
  return axios.get(API_BASE_URL);
};

export const processData = (data) => {
  return axios.post(API_BASE_URL, { data });
};