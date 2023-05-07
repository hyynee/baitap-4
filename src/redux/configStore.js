import { configureStore } from "@reduxjs/toolkit";
import quanLySinhVienReducer from "./reducers/quanLySinhVienReducer";

export const store = configureStore({
  reducer: {
    quanLySinhVienReducer: quanLySinhVienReducer,
  },
});
