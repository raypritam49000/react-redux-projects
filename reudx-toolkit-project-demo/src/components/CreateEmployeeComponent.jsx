import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addEmployeeRequest, addEmployeeSuccess, addEmployeeFailure, } from '../redux/slices/employeeSlice';
import EmployeeService from '../../src/services/EmployeeService';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CreateEmployeeComponent = () => {

    const formObject = {
        firstName: '',
        lastName: '',
        emailId: ''
    };

    const [formData, setFormData] = useState(formObject);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleOnChangeEvent = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    console.log(formData);

    const saveEmployee = (e) => {
        e.preventDefault();

        dispatch(addEmployeeRequest());
        EmployeeService.createEmployee(formData)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(addEmployeeSuccess(response.data));
                    navigate("/");
                }
            })
            .catch((error) => {
                dispatch(addEmployeeFailure(error));
            });
    }


    const resetForm = (e) => {
        e.preventDefault();
        setFormData(formObject);
    }

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Employee</h3>
                        <div className="card-body">
                            <form onSubmit={saveEmployee}>
                                <div className="form-group">
                                    <label> First Name: </label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                        value={formData.firstName} onChange={handleOnChangeEvent} />
                                </div>
                                <div className="form-group">
                                    <label> Last Name: </label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={formData.lastName} onChange={handleOnChangeEvent} />
                                </div>
                                <div className="form-group">
                                    <label> Email Id: </label>
                                    <input placeholder="Email Address" name="emailId" className="form-control"
                                        value={formData.emailId} onChange={handleOnChangeEvent} />
                                </div>

                                <div className="mt-2 text-center">
                                    <button className="btn btn-success" type='submit'>Save</button>
                                    <button className="btn btn-danger" onClick={resetForm} style={{ marginLeft: "10px" }}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CreateEmployeeComponent;