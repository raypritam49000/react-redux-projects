import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployeeByIdAction, getAllEmployeesAction } from '../redux/actions/employeeAction';

const ListEmployeeComponent = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state) => state.employee);

    useEffect(() => {
        dispatch(getAllEmployeesAction());
    }, [])

    const deleteEmployee = (id) => {
        dispatch(deleteEmployeeByIdAction(id));
    };


    const viewEmployee = (id) => {
        navigate(`/view-employee/${id}`)
    }

    const editEmployee = (id) => {
        navigate(`/update-employee/${id}`);
    }

    const addEmployee = () => {
        navigate(`/add-employee`);
    }


    if (loading === true) {
        return <h3>Loading ...</h3>
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
                            <th> Employee First Name</th>
                            <th> Employee Last Name</th>
                            <th> Employee Email Id</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && Array.isArray(data?.data) && data?.data.length > 0 && data?.data?.map(
                                employee =>
                                    <tr key={employee.id}>
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

export default ListEmployeeComponent