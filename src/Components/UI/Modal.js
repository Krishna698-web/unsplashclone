import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-20 bg-slate-500 bg-opacity-20 backdrop-blur-sm">
      {children}
    </div>
  );
};

export default Modal;
