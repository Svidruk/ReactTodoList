import axios from 'axios';
//import { DogApiUrl, IpApi, BoredApi, CatApi, WeatherApi } from '../configs/environment';

export const dogHttpClient = axios.create({
  baseURL: process.env.REACT_APP_DOG_API,
  headers: { Accept: 'Application/Json' },
});

export const IpHttpClient = axios.create({
  baseURL: process.env.REACT_APP_IP_API,
  headers: { Accept: 'Application/Json' },
});

export const CatHttpClient = axios.create({
  baseURL: process.env.REACT_APP_BORED_API,
  headers: { Accept: 'Application/Json' },
});

export const BoredHttpClient = axios.create({
  baseURL: process.env.REACT_APP_CAT_API,
  headers: { Accept: 'Application/Json' },
});

export const WeatherHttpClient = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API,
  headers: { Accept: 'Application/Json' },
});




