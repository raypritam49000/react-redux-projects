import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {},
    reducers: {

        addEmployeeRequest: (state) => {
            state.loading = true;
        },
        addEmployeeSuccess: (state, action) => {
            state.loading = false;
            state.employees = action.payload
        },
        addEmployeeFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getAllEmployeesRequest: (state) => {
            state.loading = true;
        },
        getAllEmployeesSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        getAllEmployeesFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getEmployeeByIdRequest: (state) => {
            state.loading = true;
        },
        getEmployeeByIdSuccess: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        getEmployeeByIdFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        deleteEmployeeRequest: (state) => {
            state.loading = true;
        },
        deleteEmployeeSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        deleteEmployeeFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        updateEmployeeRequest: (state) => {
            state.loading = true;
        },
        updateEmployeeSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        updateEmployeeFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { addEmployeeRequest, addEmployeeSuccess, addEmployeeFailure,
    getAllEmployeesRequest, getAllEmployeesSuccess, getAllEmployeesFailure,
    getEmployeeByIdRequest, getEmployeeByIdSuccess, getEmployeeByIdFailure,
    deleteEmployeeRequest, deleteEmployeeSuccess, deleteEmployeeFailure,
    updateEmployeeRequest, updateEmployeeSuccess, updateEmployeeFailure
} = employeeSlice.actions;
export default employeeSlice.reducer;
