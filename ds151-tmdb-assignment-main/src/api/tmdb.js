// tmdb.js

import axios from 'axios';
import { API_KEY } from '@env';

const BASE_URL = 'https://api.themoviedb.org/3';

export const searchTmdb = async (query, type = 'movie') => {
  const response = await axios.get(`${BASE_URL}/search/${type}`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return response.data.results;
};

export const getTmdbDetails = async (id, type = 'movie') => {
  const response = await axios.get(`${BASE_URL}/${type}/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const getImageUrl = (path, size = 'w500') => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};
