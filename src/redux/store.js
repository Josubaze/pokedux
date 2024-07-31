import { configureStore } from '@reduxjs/toolkit'
import dataSlice from '../slices/dataSlice';
import uiSlice from '../slices/uiSlice';

export const store = configureStore({
  reducer: {
    data: dataSlice,
    ui: uiSlice,
  },
})