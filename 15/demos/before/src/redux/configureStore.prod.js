import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  // add prod config
  reducer: rootReducer
});

export default store;
