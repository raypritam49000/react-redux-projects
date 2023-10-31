import EmployeeService from "../../services/EmployeeService";

export const addEmployeeAction = (employee) => async (dispatch) => {
    try {
        dispatch({ type: "addEmployeeRequest" });
        const response = await EmployeeService.createEmployee(employee);
        dispatch({ type: "addEmployeeSuccess", payload: response });
    } catch (error) {
        dispatch({ type: "addEmployeeFailure", payload: error.response.data.message });
    }
};


export const getAllEmployeesAction = () =>
    async (dispatch) => {
        try {
            dispatch({ type: "allEmployeeRequest" });
            const response = await EmployeeService.getEmployees();
            dispatch({ type: "allEmployeeSuccess", payload: response });
        } catch (error) {
            dispatch({ type: "allEmployeeFailure", payload: error.response.data.message });
        }
    };


export const deleteEmployeeByIdAction = (id) =>
    async (dispatch) => {
        try {
            dispatch({ type: "deleteEmployeeRequest" });
            const response = await EmployeeService.deleteEmployee(id);
            if (response.status === 200) {
                dispatch(getAllEmployeesAction())
                dispatch({ type: "deleteEmployeeSuccess", payload: response.data });
            }
        } catch (error) {
            dispatch({ type: "deleteEmployeeFailure", payload: error.response.data.message });
        }
    };

export const getEmployeeByIdAction = (id) =>
    async (dispatch) => {
        try {
            dispatch({ type: "getEmployeeRequest" });
            const { data } = await EmployeeService.getEmployeeById(id);
            dispatch({ type: "getEmployeeSuccess", payload: data });
        } catch (error) {
            dispatch({ type: "getEmployeeFailure", payload: error.response.data.message });
        }
    };

export const updateEmployeeByIdAction = (employee, employeeId, navigate) =>
    async (dispatch) => {
        try {
            dispatch({ type: "updateEmployeeRequest" });
            const response = await EmployeeService.updateEmployee(employee, employeeId);
            if (response.status === 200) {
                console.log("response,response", response.status);
                navigate("/");
                dispatch({ type: "updateEmployeeSuccess", payload: response.data });
            }
        } catch (error) {
            dispatch({ type: "updateEmployeeFailure", payload: error.response.data.message });
        }
    };


