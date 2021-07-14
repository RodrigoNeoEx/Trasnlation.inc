import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSearch = createAsyncThunk(
  'singles/getSearch',
  async(input) => {
    let reponse = `https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts?search=${input}`;
    console.log(reponse)
    return fetch(`https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts?search=${input}`)
    .then( res => res.json())
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    list: [],
    status: 'loading',
  },
  extraReducers: {
    [getSearch.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getSearch.fulfilled]: (state, {payload}) => {
      state.list = payload
      state.status = 'success'
    },
    [getSearch.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
});

export default searchSlice.reducer;