export interface WeatherData {
  status: string;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
}
