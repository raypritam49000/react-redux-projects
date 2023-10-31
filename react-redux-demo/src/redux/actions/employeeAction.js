import EmployeeService from "../../services/EmployeeService";
import {
    getEmployeesRequest, getEmployeesSuccess, getEmployeesFailure,
    deleteEmployeeRequest, deleteEmployeeSuccess, deleteEmployeeFailure,
    addEmployeeRequest, addEmployeeSuccess, addEmployeeFailure,
    getEmployeeByIdRequest, getEmployeeByIdSuccess, getEmployeeByIdFailure,
    updateEmployeeRequest, updateEmployeeSuccess, updateEmployeeFailure
} from "../slices/employeeSlice";

export function fetchEmployees() {
    return async function fetchEmployeesThunk(dispatch) {
        dispatch(getEmployeesRequest());
        try {
            const { data } = await EmployeeService.getEmployees();
            dispatch(getEmployeesSuccess(data));
        } catch (err) {
            console.log(err);
            dispatch(getEmployeesFailure(err));
        }
    };
}

export function deleteEmployeeById(id) {
    return async function deleteEmployeeByIdThunk(dispatch) {
        dispatch(deleteEmployeeRequest());
        try {
            const response = await EmployeeService.deleteEmployee(id);
            if (response.status === 200) {
                dispatch(deleteEmployeeSuccess(response?.data));
                dispatch(fetchEmployees());
            }
        } catch (err) {
            console.log(err);
            dispatch(deleteEmployeeFailure(err));
        }
    };
}


export function addEmployee(employee, navigate) {
    return async function addEmployeeThunk(dispatch) {
        dispatch(addEmployeeRequest());
        try {
            const response = await EmployeeService.createEmployee(employee);
            if (response.status === 200) {
                dispatch(addEmployeeSuccess(response?.data));
                navigate("/")
            }
        } catch (err) {
            console.log(err);
            dispatch(addEmployeeFailure(err));
        }
    };
}

export function fetchEmployeeById(employeeId) {
    return async function fetchEmployeeByIdThunk(dispatch) {
        dispatch(getEmployeeByIdRequest());
        try {
            const response = await EmployeeService.getEmployeeById(employeeId);
            if (response.status === 200) {
                dispatch(getEmployeeByIdSuccess(response?.data));
            }
        } catch (err) {
            console.log(err);
            dispatch(getEmployeeByIdFailure(err));
        }
    };
}

export function updateEmployeeById(employeeId, employeeData,navigate) {
    return async function updateEmployeeByIdThunk(dispatch) {
        dispatch(updateEmployeeRequest());
        try {
            const response = await EmployeeService.updateEmployee(employeeData, employeeId);
            if (response.status === 200) {
                dispatch(updateEmployeeSuccess(response?.data));
                navigate("/")
            }
        } catch (err) {
            console.log(err);
            dispatch(updateEmployeeFailure(err));
        }
    };
}