import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IpData } from "../../interfaces/IpData";
import { fetchIpData } from "../../api/IpApi";

export const loadIpData = createAsyncThunk("ip/fetchIp", fetchIpData);

const initialState: IpData = {
  status: "",
  country: "",
  countryCode: "",
  region: "",
  regionName: "",
  city: "",
};

export const IpSlice = createSlice({
  name: "ip",
  initialState: { data: initialState },
  reducers: {},
  extraReducers: {
    [loadIpData.pending.toString()]: (state, action) => {
      state.data.status = "unsuccess";
    },
    [loadIpData.fulfilled.toString()]: (
      state,
      action: PayloadAction<IpData>
    ) => {
      state.data.status = action.payload.status;
      state.data = action.payload;
    },
    [loadIpData.rejected.toString()]: (state, action) => {
      state.data.status = "unsuccess";
    },
  },
});

export default IpSlice.reducer;
