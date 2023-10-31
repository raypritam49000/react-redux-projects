import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from "react-router-dom";
import {
    getAllEmployeesRequest, getAllEmployeesSuccess, getAllEmployeesFailure,
    deleteEmployeeRequest, deleteEmployeeSuccess, deleteEmployeeFailure
} from '../redux/slices/employeeSlice';

const ListEmployeeComponent = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const employeeData = useSelector((state) => state.employee);

    useEffect(() => {
        dispatch(getAllEmployeesRequest());
        EmployeeService.getEmployees().then((response) => {
            if (response.status === 200) {
                dispatch(getAllEmployeesSuccess(response.data));
            }
        }).catch((error) => {
            dispatch(getAllEmployeesFailure(error));
        })
    }, [])


    const deleteEmployee = (id) => {
        dispatch(deleteEmployeeRequest())
        EmployeeService.deleteEmployee(id).then((response) => {
            if (response.status === 200) {
                dispatch(deleteEmployeeSuccess(response?.data));
                dispatch(getAllEmployeesRequest());
                EmployeeService.getEmployees().then((response) => {
                    if (response.status === 200) {
                        dispatch(getAllEmployeesSuccess(response.data));
                    }
                }).catch((error) => {
                    dispatch(getAllEmployeesFailure(error));
                })
            }
        }).catch((error) => {
            dispatch(deleteEmployeeFailure(error));
        })
    };

    const viewEmployee = (id) => {
        navigate(`/view-employee/${id}`)
    }

    const addEmployee = () => {
        navigate(`/add-employee`);
    }

    const editEmployee = (id) => {
        navigate(`/update-employee/${id}`);
    }

    return (
        <div>
            <h2 className="text-center">Employees List</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={addEmployee}> Add Employee</button>
            </div>
            <br></br>
            <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th> Employee ID</th>
                            <th> Employee First Name</th>
                            <th> Employee Last Name</th>
                            <th> Employee Email Id</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employeeData && Array.isArray(employeeData?.data) && employeeData?.data?.length > 0 && employeeData?.data?.map(
                                employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td> {employee.firstName} </td>
                                        <td> {employee.lastName}</td>
                                        <td> {employee.emailId}</td>
                                        <td>
                                            <button onClick={() => editEmployee(employee.id)} className="btn btn-info">Update </button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => viewEmployee(employee.id)} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>

        </div>
    )
}


export default ListEmployeeComponent;