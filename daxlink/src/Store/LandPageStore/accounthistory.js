import { createSlice } from "@reduxjs/toolkit";

export const HistorySlice = createSlice({
  name: "AccountHistory",
  initialState: { history: null },
  reducers: {
    updateHistory: (state, action) => {
      state.history = action.payload;
    },
  },
});
export const { updateHistory } = HistorySlice.actions
export default HistorySlice.reducer;
