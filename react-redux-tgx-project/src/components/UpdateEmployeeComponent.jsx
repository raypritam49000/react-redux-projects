import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { employeeActions } from '../redux/employee';
import { useState } from 'react';

const UpdateEmployeeComponent = () => {
  const formObject = {
    firstName: '',
    lastName: '',
    emailId: ''
  };

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(formObject);
  const employeeData = useSelector(state => state.getEmployeeByIdReducer);

  useEffect(() => {
    if (employeeData) {
      setFormData(employeeData?.items)
    }
  }, [employeeData]);

  useEffect(() => {
    dispatch(employeeActions.getEmployeeByIdAction(id));
  }, [id])

  console.log("@@@ employeeData ", formData);

  const handleOnChangeEvent = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const updateEmployee = (e) => {
    e.preventDefault();
    dispatch(employeeActions.updateEmployeeAction(formData, id, navigate))
  }

  const resetForm = () => {
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