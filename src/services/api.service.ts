import axios, { AxiosRequestConfig } from 'axios';

import { CONFIG } from '@constants/config';

const getInstance = () => {
  const instance = axios.create({
    baseURL: CONFIG.apiUrl,
    timeout: 15000,
  });

  instance.interceptors.request.use(async (config: AxiosRequestConfig) => {
    return config;
  });

  return instance;
};

export const getRequest = async (requestUrl: string) => {
  const { data } = await getInstance().get(requestUrl);

  return data;
};

export const postRequest = async (requestUrl: string, payload: object) => {
  const { data } = await getInstance().post(requestUrl, payload);

  return data;
};

export const deleteRequest = async (requestUrl: string) => {
  const { data } = await getInstance().delete(requestUrl);

  return data;
};

export const putRequest = async (requestUrl: string, payload: object) => {
  const { data } = await getInstance().put(requestUrl, payload);

  return data;
};
