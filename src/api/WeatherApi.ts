import { WeatherHttpClient } from "../helper/httpClients";
import { WeatherData } from "../interfaces/WeatherData";

export const fetchWeatherData = (): Promise<WeatherData> =>
  WeatherHttpClient.get(`${process.env.REACT_APP_WEATHER_API}`).then((resp) => {
    return resp.data;
  });
