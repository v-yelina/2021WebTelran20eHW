import React from "react";

const Button = (props) => {
  return (
    <button
      className="btn btn-secondary mt-3"
      type="button"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};

export default Button;
