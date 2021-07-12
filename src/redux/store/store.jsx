import { configureStore } from '@reduxjs/toolkit';
import { mejorconsalud } from '../../services/requestApi';

const store = configureStore({
  reducer: {
    [mejorconsalud.reducerPath]: mejorconsalud.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(mejorconsalud.middleware)
})

export default store;
