import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeeById } from '../redux/actions/employeeAction';

const ViewEmployeeComponent = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const employeeData = useSelector(state => state.employee);

    useEffect(() => {
        if (id !== undefined) {
            dispatch(fetchEmployeeById({ employeeId: id }));
        }
    }, [id]);


    return (
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> View Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label> Employee First Name: </label>
                        <div> {employeeData?.data?.firstName}</div>
                    </div>
                    <div className="row">
                        <label> Employee Last Name: </label>
                        <div> {employeeData?.data?.lastName}</div>
                    </div>
                    <div className="row">
                        <label> Employee Email ID: </label>
                        <div> {employeeData?.data?.emailId}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewEmployeeComponent