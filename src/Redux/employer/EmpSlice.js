import { createSlice } from "@reduxjs/toolkit";

export const empSlice = createSlice({
  name: "employer",
  initialState: {
    empData: null,
  },
  reducers: {
    updateEmpDetails: (state, action) => {
      state.empData = action.payload;
    },
  },
});

export const { updateEmpDetails } = empSlice.actions;
export default empSlice.reducer;
