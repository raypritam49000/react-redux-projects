import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import EmployeeService from '../services/EmployeeService';
import {
    getEmployeeByIdRequest, getEmployeeByIdSuccess, getEmployeeByIdFailure,
    updateEmployeeRequest, updateEmployeeSuccess, updateEmployeeFailure
} from '../redux/slices/employeeSlice';

const UpdateEmployeeComponent = (props) => {

    const formObject = {
        firstName: '',
        lastName: '',
        emailId: ''
    };

    const [formData, setFormData] = useState(formObject);
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const employeeData = useSelector(state => state.employee);

    console.log(id);


    useEffect(() => {
        if (employeeData) {
            setFormData(employeeData?.items);
        }
    }, [employeeData])

    console.log("@@@@ formData ::: ", formData);


    useEffect(() => {
        dispatch(getEmployeeByIdRequest());
        EmployeeService.getEmployeeById(id).then((response) => {
            if (response.status === 200) {
                dispatch(getEmployeeByIdSuccess(response?.data))
            }
        }).catch((error) => {
            dispatch(getEmployeeByIdFailure(error));
        })
    }, [id]);

    const handleOnChangeEvent = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const updateEmployee = (e) => {
        e.preventDefault();
        dispatch(updateEmployeeRequest());
        EmployeeService.updateEmployee(formData, id).then((response) => {
            if (response.status === 200) {
                dispatch(updateEmployeeSuccess(response?.data));
                navigate("/");
            }
        }).catch((error) => {
            dispatch(updateEmployeeFailure(error));
        })

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
                        <h3 className="text-center">Update Employee</h3>
                        <div className="card-body">
                            <form onSubmit={updateEmployee}>
                                <div className="form-group">
                                    <label> First Name: </label>
                                    <input placeholder="First Name" name="firstName" className="form-control"
                                        value={formData?.firstName} onChange={handleOnChangeEvent} />
                                </div>
                                <div className="form-group">
                                    <label> Last Name: </label>
                                    <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={formData?.lastName} onChange={handleOnChangeEvent} />
                                </div>
                                <div className="form-group">
                                    <label> Email Id: </label>
                                    <input placeholder="Email Address" name="emailId" className="form-control"
                                        value={formData?.emailId} onChange={handleOnChangeEvent} />
                                </div>

                                <div className="mt-2 text-center">
                                    <button className="btn btn-success" type='submit'>Update</button>
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

export default UpdateEmployeeComponent;