import axios from 'axios';

export const cardItem = async (url) => {
  const response = await axios.get(url);
  const data = await response.data;
  return data;
};