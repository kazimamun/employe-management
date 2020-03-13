import React from 'react';
import './TotalSalary.css';

const TotalSalary = (props) => {
    const employeSalary = props.employeSalary;
    const totalSalary = employeSalary.reduce((totalSalary, salary) => totalSalary + salary.salary,0);
    return (
        <div className="salarySummery">
            <h3>Salary Summery</h3>
            <h4>Person Selected : {employeSalary.length}</h4>
            <h4><p>Total Salary: ${totalSalary}</p></h4>
        </div>
    );
};

export default TotalSalary;