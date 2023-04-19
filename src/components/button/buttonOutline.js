import React from 'react';

const ButtonOutline = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`inline-block rounded-full border-2 border-cyan-800 px-6 py-3 text-sm font-semibold text-cyan-800 hover:border-cyan-700 hover:text-cyan-700 ${className}`}
      >
      {children}
    </button>
  )
}

export default ButtonOutline;