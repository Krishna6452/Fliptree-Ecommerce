import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const signUpUser = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/signup`, { name, email, password });
  return response.data;
};
