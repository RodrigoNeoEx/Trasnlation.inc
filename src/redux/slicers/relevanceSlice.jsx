import { createSlice } from "@reduxjs/toolkit";

const relevanceSlice = createSlice({
  name: 'relevance',
  initialState: {
    relevanceState: false,
    noRelevance: '',
    withRelevance: '',
  },
  reducers: {
    setRelevanceState(state, {payload}) {
      state.relevanceState = payload
    },
    getUrl(state, {payload}) {
      state.noRelevance = payload
    },
    getRelevanceUrl(state, {payload}) {
      state.withRelevance = payload
    },
  },
});

export const { setRelevanceState, getUrl, getRelevanceUrl } = relevanceSlice.actions;
export default relevanceSlice.reducer;