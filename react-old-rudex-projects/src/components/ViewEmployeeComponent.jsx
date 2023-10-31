import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getEmployeeByIdFailure, getEmployeeByIdRequest, getEmployeeByIdSuccess } from '../redux/actions/employee.action';
import { useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';

const ViewEmployeeComponent = (props) => {

    const { id } = useParams();

    console.log(props?.getEmployeeByIdReducer?.items);

    useEffect(() => {
        props.getEmployeeByIdRequest();
        EmployeeService.getEmployeeById(id).then((response) => {
            if (response.status === 200) {
                props.getEmployeeByIdSuccess(response?.data);
            }
        }).catch((error) => {
            props.getEmployeeByIdFailure(error);
        })
    }, [id])


    return (
        <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
            <h3 className="text-center"> View Employee Details</h3>
            <div className="card-body">
                <div className="row">
                    <label> Employee First Name: </label>
                    <div> {props?.getEmployeeByIdReducer?.items?.firstName}</div>
                </div>
                <div className="row">
                    <label> Employee Last Name: </label>
                    <div> {props?.getEmployeeByIdReducer?.items?.lastName}</div>
                </div>
                <div className="row">
                    <label> Employee Email ID: </label>
                    <div> {props?.getEmployeeByIdReducer?.items?.emailId}</div>
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
        getEmployeeByIdFailure: (error) => dispatch(getEmployeeByIdFailure(error))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewEmployeeComponent);