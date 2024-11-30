import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false, // User is not authenticated by default
  userInfo: null,         // No user data initially
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;     // Set the user as authenticated
      state.userInfo = action.payload; // Store user data
    },
    logout: (state) => {
      state.isAuthenticated = false; // Set the user as not authenticated
      state.userInfo = null;         // Clear user data
    },
  },
});

// Export actions and reducer
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
