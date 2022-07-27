import { WeatherHttpClient } from "../helper/httpClients";
import { WeatherApi } from "../configs/environment";
import { WeatherData } from "../interfaces/WeatherData";

export const fetchWeatherData = (): Promise<WeatherData> =>
  WeatherHttpClient.get(`${WeatherApi}`).then((resp) => {
    return resp.data;
  });
