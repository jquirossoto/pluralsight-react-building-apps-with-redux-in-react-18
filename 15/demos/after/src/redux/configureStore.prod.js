import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({
  // Could optionally provide a different config for prod here
  reducer: rootReducer
});

export default store;
