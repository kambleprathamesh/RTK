import { configureStore } from "@reduxjs/toolkit";
import Data from "../Slices/showSlice";
import userDetail from "../Slices/userDetails";
export const store = configureStore({
  reducer: {
    show: Data,
    userDetails: userDetail,
  },
});
