import React from 'react';

const CheckboxConsent = ({ data }) => {
  const { onClick, label, consent, onChange, checked, name } = data;
  return (
    <div className="relative flex gap-x-3">
      <div className="flex h-6 items-center">
        <input
          name={name}
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-cyan-800 focus:ring-cyan-800"
          onChange={onChange}
          checked={checked}
        />
      </div>
      <div className="text-sm leading-6">
        <p className="text-gray-500">
          {label}
          <span onClick={onClick} className="text-cyan-800 cursor-pointer font-semibold" >{consent}</span>
        </p>
      </div>
    </div>
  )
}

export default CheckboxConsent;