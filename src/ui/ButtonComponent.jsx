import React from "react";

const ButtonComponent = ({ varient, children }) => {
  let className = "btn btn-primary";
  if (varient === "secondary") {
    className = "btn btn-secondary";
  }
  if (varient === "danger") {
    className = "btn btn-danger";
  }
  if (varient === "success") {
    className = "btn btn-success";
  }

  return <div className={className}>{children}</div>;
};

export default ButtonComponent;
