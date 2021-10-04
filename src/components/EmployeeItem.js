import React from "react";

const EmployeeItem = (props) => {
  return (
    <div className={`list-group-item list-group-item-${props.color} mt-3`}>
      {props.children}
    </div>
  );
};

export default EmployeeItem;
