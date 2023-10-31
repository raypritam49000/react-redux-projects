import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getEmployeeByIdRequest, getEmployeeByIdSuccess, getEmployeeByIdFailure } from '../redux/slices/employeeSlice';
import EmployeeService from '../services/EmployeeService';

const ViewEmployeeComponent = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const employeeData = useSelector(state => state.employee);

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

    console.log("employeeData ", employeeData);

    return (
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> View Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label> Employee First Name: </label>
                        <div> {employeeData?.items?.firstName}</div>
                    </div>
                    <div className="row">
                        <label> Employee Last Name: </label>
                        <div> {employeeData?.items?.lastName}</div>
                    </div>
                    <div className="row">
                        <label> Employee Email ID: </label>
                        <div> {employeeData?.items?.emailId}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewEmployeeComponent;