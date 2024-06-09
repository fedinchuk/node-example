import { configureStore } from "@reduxjs/toolkit";
import { CountReducer } from "./components/Redux";

const store = configureStore({
  reducer: CountReducer,
});

export default store;
