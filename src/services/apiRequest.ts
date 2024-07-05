import axios from 'axios';
import queryString from 'query-string';
import {DexData} from '../types/data';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchData = async (
  path: string,
  params: {[key: string]: string} = {},
) => {
  const url = `${BASE_URL}/${path}?${queryString.stringify(params)}`;
  return axios.get(url);
};

export const getDataByRegion = async (
  regionNumber: number,
): Promise<DexData> => {
  const result = await fetchData(`/pokedex/${regionNumber}`);
  return result.data;
};
