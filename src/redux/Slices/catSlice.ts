import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CatData } from "../../interfaces/CatData";
import { fetchCatData } from "../../api/CatApi";

export const loadCatData = createAsyncThunk("cat/fetchcat", fetchCatData);

const initialState: CatData = {
  status: "",
  fact: "",
  length: ""
};

export const CatSlice = createSlice({
  name: "cat",
  initialState: { data: initialState },
  reducers: {},
  extraReducers: {
    [loadCatData.pending.toString()]: (state) => {
      state.data.status = "unsuccess";
    },
    [loadCatData.fulfilled.toString()]: (
      state,
      action: PayloadAction<CatData>
    ) => {
      state.data.status = "success";
      state.data = action.payload;
    },
    [loadCatData.rejected.toString()]: (state) => {
      state.data.status = "unsuccess";
    },
  },
});

export default CatSlice.reducer;
