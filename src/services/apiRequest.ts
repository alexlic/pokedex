import axios from 'axios';
import queryString from 'query-string';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchData = async (path, params = {}) => {
  const url = `${BASE_URL}/${path}?${queryString.stringify(params)}`;
  return axios.get(url);
};
