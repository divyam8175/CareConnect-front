// src/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://careconnect-back.onrender.com/', // Set your backend base URL here
});

export default axiosInstance;