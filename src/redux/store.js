import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlicer";
export const store = configureStore({
  reducer: {
    auth: auth,
  },
});
