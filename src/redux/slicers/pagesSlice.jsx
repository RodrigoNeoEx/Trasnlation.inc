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
      state.choosedPage = payload
    },
  },
});

export const { getTotal, getChoosedPage } = pagesSlice.actions;
export default pagesSlice.reducer;