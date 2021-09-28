import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import authReducer from "../features/authSlice";
import todoReducer from "../features/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: authReducer,
    todoData: todoReducer,
  },
});
