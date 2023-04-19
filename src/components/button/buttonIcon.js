import React from 'react';

const ButtonIcon = ({ children, className, onClick }) => {
  return (
    <button
      type="button"
      className="rounded-full drop-shadow bg-white p-2 text-cyan-800 hover:bg-primary-100"
      onClick={onClick}
      >
      {children}
    </button>
  )
}

export default ButtonIcon;