import { createSlice } from "@reduxjs/toolkit";
import { baseCurrencyThunk } from "./thunk";

const currencySlice = createSlice({
  name: "currency",
  initialState: {
    baseName: "",
  },
  extraReducers: {
    [baseCurrencyThunk.fulfilled](state, action) {
      state.baseName = action.payload;
    },
  },
});

export const currencyReducer = currencySlice.reducer;
