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
            state.data = action.payload;
        },
        addEmployeeFailure: (state, action) => {
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

        getEmployeeByIdRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        getEmployeeByIdSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        getEmployeeByIdFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        getEmployeesRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        getEmployeesSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        getEmployeesFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    addEmployeeRequest,
    addEmployeeSuccess,
    addEmployeeFailure,
    deleteEmployeeRequest,
    deleteEmployeeSuccess,
    deleteEmployeeFailure,
    updateEmployeeRequest,
    updateEmployeeSuccess,
    updateEmployeeFailure,
    getEmployeeByIdRequest,
    getEmployeeByIdSuccess,
    getEmployeeByIdFailure,
    getEmployeesRequest,
    getEmployeesSuccess,
    getEmployeesFailure
} = employeeSlice.actions;

export default employeeSlice.reducer;



