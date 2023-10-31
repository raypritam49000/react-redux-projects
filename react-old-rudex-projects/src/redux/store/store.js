import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import { getAllEmployeeReducer, getEmployeeByIdReducer } from '../reducers/employee.reducer';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';


const rootReducers = combineReducers({
    getAllEmployeeReducer,
    getEmployeeByIdReducer
});

const loggerMiddleware = createLogger();

const store = createStore(rootReducers,composeWithDevTools( 
    applyMiddleware(
    thunkMiddleware,
    loggerMiddleware))
);

export default store;