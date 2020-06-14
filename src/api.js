import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const api = axios.create({
  baseURL: API_URL,
});
export const getCatalog = async ({
  dateInit,
  dateEnd,
  cloudCover,
  page = 1,
  bbox,
} = {}) => {
  const response = await api.get('api/v1/catalog', {
    params: { dateInit, dateEnd, cloudCover, page, bbox },
  });
  return response;
};
