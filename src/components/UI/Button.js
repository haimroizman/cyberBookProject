import React from "react";

const Button = ({ className, label, disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
