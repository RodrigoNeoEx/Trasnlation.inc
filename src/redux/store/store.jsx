import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../slicers/searchSlice';
import singleIDReducer from '../slicers/singleById';

const store = configureStore({
  reducer: {
    search: searchReducer,
    single: singleIDReducer,
  },
})

export default store;
