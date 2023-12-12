import { createSlice } from "@reduxjs/toolkit";

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    resLists: [],
    onMindLists: null,
    onMindRestaurants: {},
  },
  reducers: {
    addLists: (state, action) => {
      const { onMind, res } = action.payload;
      state.resLists = res;
      state.onMindLists = onMind;
    },
    addOnMindRes: (state, action) => {
      state.onMindRestaurants = {
        ...state.onMindRestaurants,
        ...action.payload,
      };
    },
  },
});

export const { addLists, addOnMindRes } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
