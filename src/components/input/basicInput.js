import React from 'react';

const BasicInput = ({ data }) => {
  const { type, name, placeholder, onChange, value, className } = data;
  return (
    <div className="mt-1">
      <input
        onChange={(e) => onChange(e)}
        type={type}
        name={name}
        value={value}
        // className={`block w-full text-sm rounded-full border-0 px-6 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none ${className}}`}
        placeholder={placeholder}
      />
    </div>
  )
}

export default BasicInput;