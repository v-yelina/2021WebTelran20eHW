import React, { useState } from "react";
import Field from "./Field";
import Button from "./Button";
import EmployeeList from "./EmployeeList";
import EmployeeItem from "./EmployeeItem";

const fieldsInit = {
  name: "",
  rate: "",
  days: "",
};

const AddEmployee = () => {
  const [fields, setFields] = useState(fieldsInit);
  const [total, setTotal] = useState(0);

  const changeHandler = (event) => {
    setFields((fields) => ({
      ...fields,
      [event.target.id]: event.target.value,
    }));
  };

  const [employees, setEmployees] = useState([]);
  const clickHandler = (event) => {
    event.preventDefault();
    if (!fields.name.trim() || !fields.rate.trim() || !fields.days.trim())
      return;
    const employee = {
      id: Date.now(),
      name: fields.name.trim(),
      rate: +fields.rate.trim(),
      days: +fields.days.trim(),
      salary: fields.rate.trim() * fields.days.trim(),
      isCompleted: false,
    };
    setEmployees((employees) => {
      return [...employees, employee];
    });
    setTotal(total + employee.salary);
    setFields(fieldsInit);
  };

  const renderEmployeeList = () => {
    if (!employees.length) {
      return <EmployeeItem color="danger">No data</EmployeeItem>;
    }
    return (
      <div>
        <EmployeeList
          employees={employees}
          onCompleteHandler={completedHandler}
          onDeleteHandler={deleteHandler}
        />
        <div className="fs-4 fw-bold mt-3 px-3 d-flex justify-content-between">
          <div>Total:</div>
          <div>{total}</div>
        </div>
      </div>
    );
  };

  const completedHandler = (employeeId) => {
    const _employees = [...employees];
    const idx = _employees.findIndex((t) => t.id === employeeId);
    if (idx === -1) return;
    _employees[idx].isCompleted = !_employees[idx].isCompleted;
    setEmployees(_employees);
  };

  const deleteHandler = (employeeId) => {
    setEmployees(employees.filter((t) => t.id !== employeeId));
    setTotal(total - employees.filter((t) => t.id === employeeId)[0].salary);
  };

  return (
    <div>
      <h2 className="m-3 text-center u">List of employees and salaries</h2>
      <Field
        placeholder="Enter Full Name of employee"
        fieldValue={fields.name}
        onChange={changeHandler}
        id="name"
      />
      <Field
        placeholder="Enter daily rate"
        fieldValue={fields.rate}
        onChange={changeHandler}
        id="rate"
      />
      <Field
        placeholder="Enter amount of days worked"
        fieldValue={fields.days}
        onChange={changeHandler}
        id="days"
      />
      <Button title="Add Employee" onClick={clickHandler} />
      <div className="list-group">{renderEmployeeList()}</div>
    </div>
  );
};

export default AddEmployee;
