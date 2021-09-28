import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "user",
  initialState: {
    todo: null,
  },
  reducers: {
    setTodo(state, action) {
      state.todo = action.payload;
    },
  },
});

export const todoAction = todoSlice.actions;

export default todoSlice.reducer;
