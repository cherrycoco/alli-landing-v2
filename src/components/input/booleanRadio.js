import React from 'react';

const BOOLEAN = [
  {
    label: 'Yes',
    value: 'yes',
  },
  {
    label: 'No',
    value: 'no',
  },
]

const BooleanRadio = ({ data }) => {
  const { onChange, value, name } = data;
  return (
    <div className="relative flex gap-x-8 pt-4 mb-8">
      {BOOLEAN.map((item) => {
        return (
          <div className="flex h-6 items-center">
            <input
              name={name}
              type="radio"
              onChange={onChange}
              checked={value === item.value}
              value={item.value}
            />
            <p className="text-gray-600 pl-2 text-sm">{item.label}</p>
          </div>
          )}
      )}
    </div>
  )
}

export default BooleanRadio;