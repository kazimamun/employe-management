import React from 'react';
import './EmployeList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

const EmployeList = (props) => {
    const {img, name, email, mobile, salary} = props.employees;
    //console.log(props);
    return (
        <div className="employees">
            <div className="employe-photo">
                <img src={props.employees.img} alt=""/>
            </div>
            <div className="employe-details">                
               <p><h3>Name: {name}</h3></p>
                <p><h4>Email: {email}</h4></p>
                <p><h5>Mobile: {mobile}</h5></p>
                <h1>Salary: ${salary}</h1>
                <button 
                className="addMeBtn"
                onClick = {() => props.handleSalary(props.employees)}
                >add me <FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </div>
    );
};

export default EmployeList;