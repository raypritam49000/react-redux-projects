import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { employeeReducer } from "../reducers/employeeReducer";
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    employee: employeeReducer
  },
  middleware: [...getDefaultMiddleware(), logger],
});

export default store;
