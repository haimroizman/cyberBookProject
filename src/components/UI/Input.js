import React from "react";

const Input = React.forwardRef((props,ref) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.input.id} className="font-bold">{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
