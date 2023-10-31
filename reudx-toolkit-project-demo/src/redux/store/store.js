import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import employeeSlice from '../slices/employeeSlice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    employee: employeeSlice
  },
  middleware: [...getDefaultMiddleware(), logger],
});

export default store;
