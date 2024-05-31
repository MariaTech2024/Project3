import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./features/todoSlice";

const store = configureStore({
  reducer: reducer,
});

export default store;