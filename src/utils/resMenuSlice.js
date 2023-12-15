import { createSlice } from "@reduxjs/toolkit";

const resMenuSlice = createSlice({
  name: "resMenu",
  initialState: {
    resMenus: {},
  },
  reducers: {
    addResMenu: (state, action) => {
      state.resMenus = { ...state.resMenus, ...action.payload };
    },
  },
});

export const { addResMenu } = resMenuSlice.actions;
export default resMenuSlice.reducer;
