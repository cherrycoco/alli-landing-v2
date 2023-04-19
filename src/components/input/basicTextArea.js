import React from 'react';

const BasicTextArea = ({ data }) => {
  const { name, placeholder, onChange, value, className, rows, label, helperText } = data ? data : {};

  return (
    <div className='mt-1'>
      {label && <label className='block text-sm font-medium leading-6 text-gray-900'>{label}</label>}
      {helperText && <p className='text-gray-500 text-xs italic'>{data.helperText}</p>}
      <textarea
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        className={`block w-full text-sm rounded-sm border-0 px-6 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none ${className}}`}
        placeholder={placeholder}
      />
    </div>
  )
}

export default BasicTextArea;