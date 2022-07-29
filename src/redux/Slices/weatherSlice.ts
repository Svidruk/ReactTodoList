import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherData } from "../../interfaces/WeatherData";
import { fetchWeatherData } from "../../api/WeatherApi";

export const loadWeatherData = createAsyncThunk(
  "weather/fetchWeather",
  fetchWeatherData
);

const initialState: WeatherData = {
  status: "",
  coord: {
    lon: 0,
    lat: 0,
  },
  weather: [
    {
      id: 0,
      main: "",
      description: "",
      icon: "",
    },
  ],
  base: "",
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
    sea_level: 0,
    grnd_level: 0,
  },
  visibility: 0,
  wind: {
    speed: 0,
    deg: 0,
    gust: 0,
  },
  clouds: {
    all: 0,
  },
  dt: 0,
  sys: {
    country: "",
    sunrise: 0,
    sunset: 0,
  },
  timezone: 0,
  id: 0,
  name: "",
  cod: 0,
};

export const WeatherSlice = createSlice({
  name: "weather",
  initialState: { data: initialState },
  reducers: {},
  extraReducers: {
    [loadWeatherData.pending.toString()]: (state) => {
      state.data.status = "unsuccess";
    },
    [loadWeatherData.fulfilled.toString()]: (
      state,
      action: PayloadAction<WeatherData>
    ) => {
      state.data.status = action.payload.status;
      state.data = action.payload;
    },
    [loadWeatherData.rejected.toString()]: (state) => {
      state.data.status = "unsuccess";
    },
  },
});

export default WeatherSlice.reducer;
