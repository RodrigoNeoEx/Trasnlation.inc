import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
  name: 'totalOfPages',
  initialState: {
    total: 1,
    choosedPage: 1,
  },
  reducers: {
    getTotal(state, {payload}) {
      state.total = payload
    },
    getChoosedPage(state, {payload}) {
      state.total = payload
    },
  },
});

export const { getTotal } = pagesSlice.actions;
export default pagesSlice.reducer;