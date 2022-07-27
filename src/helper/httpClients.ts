import axios from 'axios';
import { DogApiUrl, IpApi, BoredApi, CatApi, WeatherApi } from '../configs/environment';

export const dogHttpClient = axios.create({
  baseURL: DogApiUrl,
  headers: { Accept: 'Application/Json' },
});

export const IpHttpClient = axios.create({
  baseURL: IpApi,
  headers: { Accept: 'Application/Json' },
});

export const CatHttpClient = axios.create({
  baseURL: CatApi,
  headers: { Accept: 'Application/Json' },
});

export const BoredHttpClient = axios.create({
  baseURL: BoredApi,
  headers: { Accept: 'Application/Json' },
});

export const WeatherHttpClient = axios.create({
  baseURL: WeatherApi,
  headers: { Accept: 'Application/Json' },
});




