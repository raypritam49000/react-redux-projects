import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const employeeReducer = createReducer(initialState, {

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

    allEmployeeRequest: (state) => {
        state.loading = true;
    },
    allEmployeeSuccess: (state, action) => {
        state.loading = false;
        state.data = action.payload;
    },
    allEmployeeFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearErrors: (state) => {
        state.error = null;
    },

    deleteEmployeeRequest: (state) => {
        state.loading = true;
    },
    deleteEmployeeSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    deleteEmployeeFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    getEmployeeRequest: (state) => {
        state.loading = true;
    },
    getEmployeeSuccess: (state, action) => {
        state.loading = false;
        state.data = action.payload;
    },
    getEmployeeFailure: (state, action) => {
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
});