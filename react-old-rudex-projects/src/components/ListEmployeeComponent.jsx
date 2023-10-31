import React from 'react'
import { connect } from 'react-redux';
import { getEmployeeRequest, getEmployeeSuccess, getEmployeeFailure, deleteEmployeeRequest, deleteEmployeeSuccess, deleteEmployeeFailure } from '../redux/actions/employee.action'
import { useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = (props) => {

    const navigate = useNavigate();

    console.log("data", props?.getAllEmployeeReducer?.items);

    useEffect(() => {
        props.getEmployeeRequest();
        EmployeeService.getEmployees().then((response) => {
            props.getEmployeeSuccess(response?.data);
        }).catch((error) => {
            props.getEmployeeFailure(error);
        })
    }, [])


    const deleteEmployee = (id) => {
        props.deleteEmployeeRequest();
        EmployeeService.deleteEmployee(id).then((response) => {
            if (response.status === 200) {
                props.deleteEmployeeSuccess(id);
                props.getEmployeeRequest();
                EmployeeService.getEmployees().then((response) => {
                    props.getEmployeeSuccess(response?.data);
                }).catch((error) => {
                    props.getEmployeeFailure(error);
                })
            }
        }).catch((error) => {
            props.deleteEmployeeFailure(error);
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
                            props?.getAllEmployeeReducer?.items?.map(
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

const mapStateToProps = (state) => {
    console.log(state);
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEmployeeRequest: () => dispatch(getEmployeeRequest()),
        getEmployeeSuccess: (employees) => dispatch(getEmployeeSuccess(employees)),
        getEmployeeFailure: (error) => dispatch(getEmployeeFailure(error)),
        deleteEmployeeRequest: () => dispatch(deleteEmployeeRequest()),
        deleteEmployeeSuccess: (id) => dispatch(deleteEmployeeSuccess(id)),
        deleteEmployeeFailure: (error) => dispatch(deleteEmployeeFailure(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListEmployeeComponent);