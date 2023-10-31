import { combineReducers } from 'redux';
import { getAllEmployeeListReducer, getEmployeeByIdReducer } from './employee';

const webReducer = combineReducers({
    getAllEmployeeListReducer,
    getEmployeeByIdReducer
});


const rootReducer = (state, action) => {

    if (action.type === 'USERS_LOGOUT') {
        return webReducer(state = undefined, action);
    }

    if (action.type === 'RESET_REDUCER') {
        action.reducers.map(curReducer => {
            state[curReducer] = {}
        })
        return webReducer(state, action)
    }

    return webReducer(state, action)
}


export default rootReducer;
