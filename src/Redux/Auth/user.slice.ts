import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  //Make sure to add your own types/ do not use any
  user: null,
  count: 0,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    updateCount: (state) => {
      state.count = state.count + 1;
    },
  },
  extraReducers: (_builder) => {},
});

export const { updateCount } = userSlice.actions;

export default userSlice.reducer;
