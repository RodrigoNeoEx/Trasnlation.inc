import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSingleById = createAsyncThunk(
  'single/getSingleById',
  async(id) => {
    return fetch(`https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts/${id}`)
    .then( res => res.json());
  }
)

const singleBydIdSlice = createSlice({
  name: 'singleID',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getSingleById.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getSingleById.fulfilled]: (state, {payload}) => {
      state.list = payload
      state.status = 'success'
    },
    [getSingleById.rejected]: (state, action) => {
      state.status = 'failed'
    },
  },
})

export default singleBydIdSlice.reducer;
