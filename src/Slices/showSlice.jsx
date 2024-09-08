import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: 0 };
export const showSlice = createSlice({
  name: "abc",
  initialState,
  reducers: {
    showData: (state) => {
      state.value = state.value;
    },
    increment: (state) => {
      state.value = state.value + 1;
    },
    incrementByValue: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

// export reducers
// export slice--component

export const { showData, increment, incrementByValue } = showSlice.actions;
export default showSlice.reducer;
