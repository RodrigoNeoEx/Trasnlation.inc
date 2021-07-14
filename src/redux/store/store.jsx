import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../slicers/searchSlice';
import singleIDReducer from '../slicers/singleById';
import pagesReducer from '../slicers/pagesSlice'

const store = configureStore({
  reducer: {
    search: searchReducer,
    single: singleIDReducer,
    pages: pagesReducer,
  },
})

export default store;
