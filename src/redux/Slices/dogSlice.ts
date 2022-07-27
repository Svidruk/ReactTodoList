import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DogData } from "../../interfaces/DogData";
import { fetchDogData } from "../../api/DogApi";

export const loadDogData = createAsyncThunk("dog/fetchDog", fetchDogData);

const initialState: DogData = {
  message: "",
  status: "",
};

export const dogSlice = createSlice({
  name: "dog",
  initialState: { data: initialState },
  reducers: {},
  extraReducers: {
    [loadDogData.pending.toString()]: (state) => {
      state.data.status = "unsuccess";
    },
    [loadDogData.fulfilled.toString()]: (
      state,
      action: PayloadAction<{ message: string; status: string }>
    ) => {
      state.data = action.payload;
    },
    [loadDogData.rejected.toString()]: (state) => {
      state.data.status = "unsuccess";
    },
  },
});

export default dogSlice.reducer;
