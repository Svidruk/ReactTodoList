import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherData } from "../../interfaces/WeatherData";
import { fetchWeatherData } from "../../api/WeatherApi";

export const loadIpData = createAsyncThunk("ip/fetchIp", fetchWeatherData);

const initialState: WeatherData = {
  status: "",
  weather: [
    {
      id: 0,
      main: "",
      description: "",
      icon: "",
    },
  ],
};

export const WeatherSlice = createSlice({
  name: "weather",
  initialState: { data: initialState },
  reducers: {},
  extraReducers: {
    [loadIpData.pending.toString()]: (state) => {
      state.data.status = "unsuccess";
    },
    [loadIpData.fulfilled.toString()]: (
      state,
      action: PayloadAction<WeatherData>
    ) => {
      state.data.status = action.payload.status;
      state.data = action.payload;
    },
    [loadIpData.rejected.toString()]: (state) => {
      state.data.status = "unsuccess";
    },
  },
});

export default WeatherSlice.reducer;
