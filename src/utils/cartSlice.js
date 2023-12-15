import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    restaurantId: null,
    addedItems: {},
    totalItemsCount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.addedItems = { ...state.addedItems, ...action.payload };
      state.totalItemsCount += 1;
    },
    removeItem: (state, action) => {
      if (state.addedItems[action.payload].count > 1) {
        state.addedItems[action.payload].count -= 1;
      } else {
        delete state.addedItems[action.payload];
      }
      if (state.totalItemsCount > 1) {
        state.totalItemsCount -= 1;
      } else {
        state.totalItemsCount = 0;
        state.restaurantId = null;
      }
    },
    setResId: (state, action) => {
      state.restaurantId = action.payload;
    },
    clearCart: (state) => {
      state.addedItems = {};
      state.totalItemsCount = 0;
      state.restaurantId = null;
    },
  },
});

export const { addItem, clearCart, removeItem, setResId, addTotalCount } =
  cartSlice.actions;
export default cartSlice.reducer;
