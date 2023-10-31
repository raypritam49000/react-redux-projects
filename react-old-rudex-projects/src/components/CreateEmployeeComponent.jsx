import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEmployeeRequest, addEmployeeSuccess, addEmployeeFailure } from '../redux/actions/employee.action';
import EmployeeService from '../services/EmployeeService';

const CreateEmployeeComponent = (props) => {

    const formObject = {
        firstName: '',
        lastName: '',
        emailId: ''
    };

    const [formData, setFormData] = useState(formObject);
    const navigate = useNavigate();


    const handleOnChangeEvent = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    console.log(formData);

    const saveEmployee = (e) => {
        e.preventDefault();

        console.log(props);
        props.addEmployeeRequest();
        EmployeeService.createEmployee(formData).then((response) => {
            if (response.status === 200) {
                props.addEmployeeSuccess(response?.data);
                navigate("/")
            }
        }).catch((error) => {
            props.addEmployeeFailure(error);
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


const mapDispatchToProps = (dispatch) => {
    return {
        addEmployeeRequest: () => dispatch(addEmployeeRequest()),
        addEmployeeSuccess: (employee) => dispatch(addEmployeeSuccess(employee)),
        addEmployeeFailure: (error) => dispatch(addEmployeeFailure(error))
    }
}


export default connect(null, mapDispatchToProps)(CreateEmployeeComponent);