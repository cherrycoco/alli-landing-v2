import React from 'react';

const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-cyan-800 px-6 py-3 text-sm font-semibold text-white rounded-full shadow-sm hover:bg-cyan-700 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;