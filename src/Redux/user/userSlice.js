import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
  },
  reducers: {
    updateUserDetails: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { updateUserDetails } = userSlice.actions;
export default userSlice.reducer;

