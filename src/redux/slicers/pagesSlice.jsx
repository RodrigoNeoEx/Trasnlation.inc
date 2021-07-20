import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    pageName: '',
    choosed: 1,
  },
  reducers: {
    getPageName(state, {payload}) {
      state.pageName = payload
    },
    getChoosedPage(state, {payload}) {
      state.choosed = payload
    },
  },
});

export const { getPageName, getChoosedPage } = pagesSlice.actions;
export default pagesSlice.reducer;