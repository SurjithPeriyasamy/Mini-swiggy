import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import restaurantsReducer from "./restaurantsSlice";
import resMenuReducer from "./resMenuSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    restaurants: restaurantsReducer,
    resMenu: resMenuReducer,
  },
});

export default appStore;
