import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux';
import { getEmployeeByIdFailure, getEmployeeByIdRequest, getEmployeeByIdSuccess, updateEmployeeFailure, updateEmployeeRequest, updateEmployeeSuccess } from '../redux/actions/employee.action';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployeeComponent = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const employeeData = props?.getEmployeeByIdReducer?.items;

    console.log(id);

    const formObject = {
        firstName: '',
        lastName: '',
        emailId: ''
    };

    const [formData, setFormData] = useState(formObject);


    useEffect(() => {
        if (employeeData) {
            setFormData(employeeData);
        }
    }, [employeeData])


    useEffect(() => {
        props.getEmployeeByIdRequest();
        EmployeeService.getEmployeeById(id).then((response) => {
            if (response.status === 200) {
                props.getEmployeeByIdSuccess(response?.data);
            }
        }).catch((error) => {
            props.getEmployeeByIdFailure(error);
        })
    }, [id]);

    const handleOnChangeEvent = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const updateEmployee = (e) => {
        e.preventDefault();
        props.updateEmployeeRequest();
        EmployeeService.updateEmployee(formData,id).then((response) => {
            if (response.status === 200) {
                props.updateEmployeeSuccess(response?.data);
                navigate("/");
            }
        }).catch((error) => {
            props.updateEmployeeFailure(error);
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

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEmployeeByIdRequest: () => dispatch(getEmployeeByIdRequest()),
        getEmployeeByIdSuccess: (employee) => dispatch(getEmployeeByIdSuccess(employee)),
        getEmployeeByIdFailure: (error) => dispatch(getEmployeeByIdFailure(error)),
        updateEmployeeRequest: () => dispatch(updateEmployeeRequest()),
        updateEmployeeSuccess: (employee) => dispatch(updateEmployeeSuccess(employee)),
        updateEmployeeFailure: (error) => dispatch(updateEmployeeFailure(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEmployeeComponent);