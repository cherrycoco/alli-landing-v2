import React from 'react';

const CheckboxSimple = ({ data }) => {
  const { onChange, checked, label, name } = data;
  return (
    <div className="relative flex gap-x-3">
      <div className="flex h-6 items-center">
        <input
          name={name}
          type="checkbox"
          className="h-5 w-5 cursor-pointer rounded border-gray-300 text-cyan-800 focus:ring-cyan-800"
          onChange={onChange}
          checked={checked}
        />
      </div>
      <div className="text-sm leading-6">
        <p className="text-gray-600">{label}</p>
      </div>
    </div>
  )
}

export default CheckboxSimple;