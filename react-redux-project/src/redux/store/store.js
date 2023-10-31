import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import employeeSlice from "../slices/employeeSlice";

const rootReducers = combineReducers({
    employee: employeeSlice
})

const store = configureStore({
    reducer: rootReducers,
    middleware: [logger, thunk]
});

export default store;