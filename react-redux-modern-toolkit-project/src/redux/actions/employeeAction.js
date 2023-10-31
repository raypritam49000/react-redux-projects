import { createAsyncThunk } from '@reduxjs/toolkit';
import EmployeeService from '../../services/EmployeeService';

export const fetchAllEmployees = createAsyncThunk('employee/fetchAllEmployees', async (data, thunkAPI) => {
    return await EmployeeService.getEmployees().then(res => {
        return res.data;
    }).catch(error => {
        return thunkAPI.rejectWithValue(error.response);
    });
});

export const fetchEmployeeById = createAsyncThunk('employee/fetchEmployeeById', async (data, thunkAPI) => {
    return await EmployeeService.getEmployeeById(data.employeeId).then(res => {
        return res.data;
    }).catch(error => {
        return thunkAPI.rejectWithValue(error.response);
    });
});

export const addEmployee = createAsyncThunk('employee/addEmployee', async (data, thunkAPI) => {
    return await EmployeeService.createEmployee(data.employeeData).then(res => {
        return res.data;
    }).catch(error => {
        return thunkAPI.rejectWithValue(error.response);
    });
});

export const deleteEmployeeById = createAsyncThunk('employee/deleteEmployeeById', async (data, thunkAPI) => {
    return await EmployeeService.deleteEmployee(data.employeeId).then(res => {
        return res.data;
    }).catch(error => {
        return thunkAPI.rejectWithValue(error.response);
    });
});

export const updateEmployeeById = createAsyncThunk('employee/updateEmployeeById', async (data, thunkAPI) => {
    return await EmployeeService.updateEmployee(data.employee, data.employeeId).then(res => {
        return res.data;
    }).catch(error => {
        return thunkAPI.rejectWithValue(error.response);
    });
});