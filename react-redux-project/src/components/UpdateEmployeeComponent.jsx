import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeAction, updateEmployeeAction } from '../redux/actions/employeeActions';

const UpdateEmployeeComponent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, data } = useSelector(state => state.employee.getEmployeeReducer);

    console.log(id);

    const formObject = {
        firstName: '',
        lastName: '',
        emailId: ''
    };

    const [formData, setFormData] = useState(formObject);


    useEffect(() => {
        if (id !== undefined) {
            dispatch(getEmployeeAction({ employeeId: id }));
        }
    }, [id]);

    useEffect(() => {
        if (data) {
            setFormData(data);
        }
    }, [data])

    const handleOnChangeEvent = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    console.log(formData);

    const updateEmployee = (e) => {
        e.preventDefault();
        dispatch(updateEmployeeAction({ employee: formData, employeeId: id })).then((response) => {
            console.log("response", response);
            if (response.meta.requestStatus === "fulfilled") {
                navigate("/");
            }
        }).catch((error) => {
            console.log(error);
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

export default UpdateEmployeeComponent;