import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userSlice from "./fetchUserSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;