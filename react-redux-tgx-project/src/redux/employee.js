import EmployeeService from "../service/EmployeeService"

// export actions
export const employeeActions = {
    getAllEmployeeListAction,
    addEmployeeAction,
    getEmployeeByIdAction,
    deleteEmployeeByIdAction,
    updateEmployeeAction
}

//export constants
export const employeeConstants = {

    GET_ALL_EMPLOYEE_REQUEST: 'GET_ALL_EMPLOYEE_REQUEST',
    GET_ALL_EMPLOYEE_SUCCESS: 'GET_ALL_EMPLOYEE_SUCCESS',
    GET_ALL_EMPLOYEE_FAILURE: 'GET_ALL_EMPLOYEE_FAILURE',

    CREATE_EMPLOYEE_REQUEST: 'CREATE_EMPLOYEE_REQUEST',
    CREATE_EMPLOYEE_SUCCESS: 'CREATE_EMPLOYEE_SUCCESS',
    CREATE_EMPLOYEE_FAILURE: 'CREATE_EMPLOYEE_FAILURE',

    GET_EMPLOYEE_BY_ID_REQUEST: 'GET_EMPLOYEE_BY_ID_REQUEST',
    GET_EMPLOYEE_BY_ID_SUCCESS: 'GET_EMPLOYEE_BY_ID_SUCCESS',
    GET_EMPLOYEE_BY_ID_FAILURE: 'GET_EMPLOYEE_BY_ID_FAILURE',

    DELETE_EMPLOYEE_REQUEST: 'DELETE_EMPLOYEE_REQUEST',
    DELETE_EMPLOYEE_SUCCESS: 'DELETE_EMPLOYEE_SUCCESS',
    DELETE_EMPLOYEE_FAILURE: 'DELETE_EMPLOYEE_FAILURE',

    UPDATE_EMPLOYEE_REQUEST: 'UPDATE_EMPLOYEE_REQUEST',
    UPDATE_EMPLOYEE_SUCCESS: 'UPDATE_EMPLOYEE_SUCCESS',
    UPDATE_EMPLOYEE_FAILURE: 'UPDATE_EMPLOYEE_FAILURE',
}

//export service
export const employeeService = {
    getAllEmployeeList,
    addEmployeeService,
    getEmployeeByIdService,
    deleteEmployeeByIdService,
    updateEmployeeByIdService
}

// start actions


function updateEmployeeAction(employee, id, navigate) {
    return dispatch => {
        dispatch(request());

        employeeService.updateEmployeeByIdService(employee, id)
            .then((data) => {
                navigate("/");
                dispatch(success(data));
            }).catch((error) => {
                dispatch(failure(error.toString()));
            });
    };


    function request() {
        return { type: employeeConstants.UPDATE_EMPLOYEE_REQUEST }
    }

    function success(employee) {
        return { type: employeeConstants.UPDATE_EMPLOYEE_SUCCESS, employee }
    }

    function failure(error) {
        return { type: employeeConstants.UPDATE_EMPLOYEE_FAILURE, error }
    }
}

function deleteEmployeeByIdAction(id) {
    return dispatch => {
        dispatch(request());
        employeeService.deleteEmployeeByIdService(id).then((data) => {
            dispatch(success());
            dispatch(getAllEmployeeListAction());
        }).catch((error) => {
            dispatch(failure(error.toString()));
        })
    };

    function request() {
        return { type: employeeConstants.DELETE_EMPLOYEE_REQUEST }
    }

    function success() {
        return { type: employeeConstants.DELETE_EMPLOYEE_SUCCESS }
    }

    function failure(error) {
        return { type: employeeConstants.DELETE_EMPLOYEE_REQUEST, error }
    }
}



function getAllEmployeeListAction() {
    return dispatch => {
        dispatch(request());

        employeeService.getAllEmployeeList().then(
            employees => dispatch(success(employees)),
            error => dispatch(failure(error.toString()))
        )
    };

    function request() {
        return { type: employeeConstants.GET_ALL_EMPLOYEE_REQUEST }
    }

    function success(employees) {
        return { type: employeeConstants.GET_ALL_EMPLOYEE_SUCCESS, employees }
    }

    function failure(error) {
        return { type: employeeConstants.GET_ALL_EMPLOYEE_FAILURE, error }
    }
}

function addEmployeeAction(employee, navigate) {
    return dispatch => {
        dispatch(request());

        employeeService.addEmployeeService(employee)
            .then((data) => {
                navigate("/");
                dispatch(success(data));
            }).catch((error) => {
                dispatch(failure(error.toString()));
            });
    };


    function request() {
        return { type: employeeConstants.CREATE_EMPLOYEE_REQUEST }
    }

    function success(employee) {
        return { type: employeeConstants.CREATE_EMPLOYEE_SUCCESS, employee }
    }

    function failure(error) {
        return { type: employeeConstants.CREATE_EMPLOYEE_FAILURE, error }
    }
}


function getEmployeeByIdAction(id) {
    return dispatch => {
        dispatch(request());
        employeeService.getEmployeeByIdService(id).then(
            employee => dispatch(success(employee)),
            error => dispatch(failure(error.toString()))
        )
    };

    function request() {
        return { type: employeeConstants.GET_EMPLOYEE_BY_ID_REQUEST }
    }

    function success(employee) {
        return { type: employeeConstants.GET_EMPLOYEE_BY_ID_SUCCESS, employee }
    }

    function failure(error) {
        return { type: employeeConstants.GET_EMPLOYEE_BY_ID_FAILURE, error }
    }
}


// end actions


// start reducers
export function getAllEmployeeListReducer(state = {}, action) {
    switch (action.type) {
        case employeeConstants.GET_ALL_EMPLOYEE_REQUEST:
            return {
                loading: true,
            };
        case employeeConstants.GET_ALL_EMPLOYEE_SUCCESS:
            return {
                loading: false,
                items: action.employees
            };
        case employeeConstants.GET_ALL_EMPLOYEE_FAILURE:
            return {};
        default:
            return state
    }
}


export function getEmployeeByIdReducer(state = {}, action) {
    switch (action.type) {
        case employeeConstants.GET_EMPLOYEE_BY_ID_REQUEST:
            return {
                loading: true,
            };
        case employeeConstants.GET_EMPLOYEE_BY_ID_SUCCESS:
            return {
                loading: false, items: action.employee
            };
        case employeeConstants.GET_EMPLOYEE_BY_ID_FAILURE:
            return {};

        default:
            return state
    }
}

// end reducers


// start service 
export async function getAllEmployeeList() {
    return await EmployeeService.getEmployees().then((response) => {
        return response.data;
    }).catch((error) => {
        console.log("error ::: ", error);
    })
}

export async function addEmployeeService(employee) {
    return await EmployeeService.createEmployee(employee).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log("error ::: ", error);
    })
}

export async function getEmployeeByIdService(id) {
    return await EmployeeService.getEmployeeById(id).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log("error ::: ", error);
    })
}

export async function deleteEmployeeByIdService(id) {
    return await EmployeeService.deleteEmployee(id).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log("error ::: ", error);
    })
}

export async function updateEmployeeByIdService(data, id) {
    return await EmployeeService.updateEmployee(data, id).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log("error ::: ", error);
    })
}
// end service