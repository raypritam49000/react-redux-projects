import {
    GET_EMPLOYEES_REQUEST, GET_EMPLOYEES_SUCCESS, GET_EMPLOYEES_FAILURE,
    GET_EMPLOYEE_REQUEST, GET_EMPLOYEE_SUCCESS, GET_EMPLOYEE_FAILURE,
    DELETE_EMPLOYEE_REQUEST, DELETE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_FAILURE, 
    ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESS, ADD_EMPLOYEE_FAILURE, 
    UPDATE_EMPLOYEE_REQUEST, UPDATE_EMPLOYEE_SUCCESS, UPDATE_EMPLOYEE_FAILURE
} from "../constants/employee.actionType"

export const getEmployeeRequest = () => {
    return {
        type: GET_EMPLOYEES_REQUEST
    }
}


export const getEmployeeSuccess = (employees) => {
    return {
        type: GET_EMPLOYEES_SUCCESS, payload: employees
    }
}

export const getEmployeeFailure = (error) => {
    return {
        type: GET_EMPLOYEES_FAILURE, payload: error
    }
}


export const getEmployeeByIdRequest = () => {
    return {
        type: GET_EMPLOYEE_REQUEST
    }
}


export const getEmployeeByIdSuccess = (employee) => {
    return {
        type: GET_EMPLOYEE_SUCCESS, payload: employee
    }
}

export const getEmployeeByIdFailure = (error) => {
    return {
        type: GET_EMPLOYEE_FAILURE, payload: error
    }
}


export const deleteEmployeeRequest = () => {
    return {
        type: DELETE_EMPLOYEE_REQUEST
    }
}

export const deleteEmployeeSuccess = (id) => {
    return {
        type: DELETE_EMPLOYEE_SUCCESS, payload: id
    }
}

export const deleteEmployeeFailure = (error) => {
    return {
        type: DELETE_EMPLOYEE_FAILURE, payload: error
    }
}


export const addEmployeeRequest = () => {
    return {
        type: ADD_EMPLOYEE_REQUEST
    }
}


export const addEmployeeSuccess = (employee) => {
    return {
        type: ADD_EMPLOYEE_SUCCESS, payload: employee
    }
}

export const addEmployeeFailure = (error) => {
    return {
        type: ADD_EMPLOYEE_FAILURE, payload: error
    }
}

export const updateEmployeeRequest = () => {
    return {
        type: UPDATE_EMPLOYEE_REQUEST
    }
}

export const updateEmployeeSuccess = (student) => {
    return {
        type: UPDATE_EMPLOYEE_SUCCESS, payload: student
    }
}

export const updateEmployeeFailure = (error) => {
    return {
        type: UPDATE_EMPLOYEE_FAILURE,payload: error
    }
}