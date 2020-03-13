import React, { useState } from 'react';
import './Details.css';
import fakeEmploye from '../../fakeEmploye'
import EmployeList from '../EmployeList/EmployeList';
import TotalSalary from '../TotalSalary/TotalSalary';

const Details = () => {
    const firstFifteen = fakeEmploye.slice(0,15);
    const [employees, setEmployees] = useState(firstFifteen);
    const [employeSalary, setEmployeSalary] = useState([]);

    const handleSalary = (employe) => {
        console.log("click marche", employe);
        const newSalary = [...employeSalary, employe];
        setEmployeSalary(newSalary);
    }

    return (
        <div className="details-about">
            <div className="empoyee-container">                
                    {
                        employees.map(employe =><EmployeList 
                            handleSalary = {handleSalary}
                            employees={employe}
                        ></EmployeList>)
                    }                
            </div>
            <div className="employee-salary">
                <TotalSalary employeSalary={employeSalary}></TotalSalary>
            </div>
            {/*
            <div className="details-about-child">
                <h3>{props.about.name}</h3>
                <h4>{props.about.email}</h4>
                <button>Click Me</button>
            </div>  
            */}          
        </div>

    );
};

export default Details;