import { createSlice } from '@reduxjs/toolkit'
import { addEmployeeAction, deleteEmployeesAction, getAllEmployeesAction, getEmployeeAction, updateEmployeeAction } from '../actions/employeeActions';

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        addEmployeeReducer: { loading: false },
        getAllEmployeesReducer: { loading: false },
        deleteEmployeeReducer: { loading: false },
        getEmployeeReducer: { loading: false },
        updateEmployeeReducer: { loading: false },
    },
    reducers: {
    },
    extraReducers: {

        [addEmployeeAction.pending]: (state) => {
            state.addEmployeeReducer = { loading: true }
        },
        [addEmployeeAction.fulfilled]: (state, action) => {
            state.addEmployeeReducer = { loading: false, data: action.payload }
        },
        [addEmployeeAction.rejected]: (state) => {
            state.addEmployeeReducer = { loading: false }
        },

        [getAllEmployeesAction.pending]: (state) => {
            state.getAllEmployeesReducer = { loading: true }
        },
        [getAllEmployeesAction.fulfilled]: (state, action) => {
            state.getAllEmployeesReducer = { loading: false, data: action.payload }
        },
        [getAllEmployeesAction.rejected]: (state) => {
            state.getAllEmployeesReducer = { loading: false }
        },

        [deleteEmployeesAction.pending]: (state) => {
            state.deleteEmployeeReducer = { loading: true }
        },
        [deleteEmployeesAction.fulfilled]: (state) => {
            state.deleteEmployeeReducer = { loading: false }
        },
        [deleteEmployeesAction.rejected]: (state) => {
            state.deleteEmployeeReducer = { loading: false }
        },

        [getEmployeeAction.pending]: (state) => {
            state.getEmployeeReducer = { loading: true }
        },
        [getEmployeeAction.fulfilled]: (state, action) => {
            state.getEmployeeReducer = { loading: false, data: action.payload }
        },
        [getEmployeeAction.rejected]: (state) => {
            state.getEmployeeReducer = { loading: false }
        },

        [updateEmployeeAction.pending]: (state) => {
            state.updateEmployeeReducer = { loading: true }
        },
        [updateEmployeeAction.fulfilled]: (state, action) => {
            state.updateEmployeeReducer = { loading: false, data: action.payload }
        },
        [updateEmployeeAction.rejected]: (state) => {
            state.updateEmployeeReducer = { loading: false }
        },
    }
})
export const { } = employeeSlice.actions
export default employeeSlice.reducer;