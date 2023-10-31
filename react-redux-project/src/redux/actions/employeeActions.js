import { createAsyncThunk } from '@reduxjs/toolkit'
import EmployeeService from '../../services/EmployeeService';

export const addEmployeeAction = createAsyncThunk("employee/addEmployeeAction", async (data, thunkAPI) => {
    return await EmployeeService.createEmployee(data.values).then(res => {
        return res.data;
    }).catch(error => {
        return thunkAPI.rejectWithValue(error.response);
    });
});


export const getAllEmployeesAction = createAsyncThunk("employee/getAllEmployeesAction", async (data, thunkAPI) => {
    return await EmployeeService.getEmployees().then(res => {
        return res.data;
    }).catch(error => {
        return thunkAPI.rejectWithValue(error.response);
    });
});

export const deleteEmployeesAction = createAsyncThunk("employee/deleteEmployeesAction", async (data, thunkAPI) => {
    return await EmployeeService.deleteEmployee(data.employeeId).then(res => {
        return res.data;
    }).catch(error => {
        return thunkAPI.rejectWithValue(error.response);
    });
});

export const getEmployeeAction = createAsyncThunk("employee/getEmployeeAction", async (data, thunkAPI) => {
    return await EmployeeService.getEmployeeById(data.employeeId).then(res => {
        return res.data;
    }).catch(error => {
        return thunkAPI.rejectWithValue(error.response);
    });
});

export const updateEmployeeAction = createAsyncThunk("employee/updateEmployeeAction", async (data, thunkAPI) => {
    return await EmployeeService.updateEmployee(data.employee, data.employeeId).then(res => {
        return res.data;
    }).catch(error => {
        return thunkAPI.rejectWithValue(error.response);
    });
});