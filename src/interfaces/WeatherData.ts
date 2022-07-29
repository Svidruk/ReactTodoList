export interface WeatherData {
  status: String;
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: String;
      description: String;
      icon: String;
    }
  ];
  base: String;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: String;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: String;
  cod: number;
}
