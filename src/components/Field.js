import React from "react";

const Field = (props) => {
  return (
    <input
      type="text"
      className="form-control mt-2"
      placeholder={props.placeholder}
      value={props.fieldValue}
      onChange={props.onChange}
      id={props.id}
    />
  );
};

export default Field;
