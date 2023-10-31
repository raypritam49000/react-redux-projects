import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeByIdAction } from '../redux/actions/employeeAction';

const ViewEmployeeComponent = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const [employee, setEmployee] = useState({});
    const { loading, data } = useSelector(state => state.employee);

    console.log("@@@@ ViewEmployeeComponent ::: ",loading, employee);

    useEffect(() => {
        if (id !== undefined) {
            dispatch(getEmployeeByIdAction(id));
        }
    }, [id]);


    useEffect(() => {
        if (data) {
            setEmployee(data);
        }
    }, [data])


    if (loading === true) {
        return <h3>Loading ...</h3>
    }


    return (
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> View Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label> Employee First Name: </label>
                        <div> {employee.firstName}</div>
                    </div>
                    <div className="row">
                        <label> Employee Last Name: </label>
                        <div> {employee.lastName}</div>
                    </div>
                    <div className="row">
                        <label> Employee Email ID: </label>
                        <div> {employee.emailId}</div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default ViewEmployeeComponent