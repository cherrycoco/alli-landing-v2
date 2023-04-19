import React from 'react';

const BasicSelect = ({ data }) => {
  const { name, onChange, value, className, label, options } = data ? data : {};

  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      {data.helperText && <p className='text-gray-500 text-xs italic'>{data.helperText}</p>}
      <div className="mt-1">
        <select
          name={name}
          className={`block w-full text-sm rounded-full border-0 px-6 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none ${className}}`}
          onChange={onChange}
          value={value}
        > 
          <option value=''>--Select an Option--</option>
          {options.map((option) => (<option key={option.value} value={option.value}>{option.name}</option>))}
        </select>
      </div>
    </div>
  )
}

export default BasicSelect;