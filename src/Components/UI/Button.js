import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <>
      <button
        className="flex gap-1 items-center border py-2 px-5 rounded-md text-gray-400 hover:text-gray-800 hover:drop-shadow-md hover:border-slate-800 transition"
        onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
