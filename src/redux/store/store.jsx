import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../slicers/searchSlice';
import singleIDReducer from '../slicers/singleById';
import pagesReducer from '../slicers/pagesSlice'
import relevanceReducer from '../slicers/relevanceSlice'

const store = configureStore({
  reducer: {
    search: searchReducer,
    single: singleIDReducer,
    pages: pagesReducer,
    relevance: relevanceReducer,
  },
})

export default store;
