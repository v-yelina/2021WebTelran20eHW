import React from "react";
import EmployeeItem from "./EmployeeItem";
import DeleteButton from "./DeleteButton";

const EmployeeList = (props) => {
  return props.employees.map((employee) => (
    <EmployeeItem
      key={employee.id}
      color={employee.isCompleted ? "success" : "dark"}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div
          onClick={() => {
            props.onCompleteHandler(employee.id);
          }}
        >
          {employee.name}
        </div>
        <div className="d-flex align-items-center">
          <span>{employee.salary}</span>
          <DeleteButton
            employees={props.employees}
            employee={employee}
            onDeleteHandler={props.onDeleteHandler}
          />
        </div>
      </div>
    </EmployeeItem>
  ));
};

export default EmployeeList;
