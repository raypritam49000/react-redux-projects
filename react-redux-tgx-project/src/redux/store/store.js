import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../root.reducers";

const loggerMiddleware = createLogger();

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ))
);