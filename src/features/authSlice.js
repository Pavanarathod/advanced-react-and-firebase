import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: null,
    loading: false,
  },
  reducers: {
    setUserData(state, action) {
      state.user = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
