import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BoredData } from "../../interfaces/BoredData";
import { fetchBoredData } from "../../api/BoredApi";

export const loadBoredData = createAsyncThunk("dog/fetchBored", fetchBoredData);

const initialState: BoredData = {
  status: "",
  activity: "",
  type: "",
  participants: 0,
  price: 0,
  link: "",
  key: "",
  accessibility: 0,
};

export const BoredSlice = createSlice({
  name: "bored",
  initialState: { data: initialState },
  reducers: {},
  extraReducers: {
    [loadBoredData.pending.toString()]: (state) => {
      state.data.status = "unsuccess";
    },
    [loadBoredData.fulfilled.toString()]: (
      state,
      action: PayloadAction<BoredData>
    ) => {
      state.data = action.payload;
      state.data.status = "success";
    },
    [loadBoredData.rejected.toString()]: (state) => {
      state.data.status = "unsuccess";
    },
  },
});

export default BoredSlice.reducer;
