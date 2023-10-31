import { GET_EMPLOYEES_FAILURE, GET_EMPLOYEES_REQUEST, GET_EMPLOYEES_SUCCESS, GET_EMPLOYEE_FAILURE, GET_EMPLOYEE_REQUEST, GET_EMPLOYEE_SUCCESS } from "../constants/employee.actionType"


export const getAllEmployeeReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_EMPLOYEES_REQUEST:
            return {
                isLoading: true
            }
        case GET_EMPLOYEES_SUCCESS:
            return {
                isLoading: false,
                items: action.payload
            }
        case GET_EMPLOYEES_FAILURE:
            return {}
        default:
            return state
    }
}

export const getEmployeeByIdReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_EMPLOYEE_REQUEST:
            return {
                isLoading: true
            }
        case GET_EMPLOYEE_SUCCESS:
            return {
                isLoading: false,
                items: action.payload
            }
        case GET_EMPLOYEE_FAILURE:
            return {}
        default:
            return state
    }
}