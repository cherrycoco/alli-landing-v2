import React from 'react';

const SCALE = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
]

const ScaleSelector = ({ data }) => {
  const { onChange, value, name, labelLow, labelHigh } = data;
  return (
    <div className='flex flex-col justify-center content-center mb-12 space-y-4'>
      <div className="flex pt-4 justify-around">
      {SCALE.map((item) => {
        return (
          <div className="flex flex-col items-center space-y-1">
            <p className="text-gray-500 text-sm">{item}</p>
            <input
              name={name}
              type="radio"
              onChange={onChange}
              checked={value === item}
              value={item}
              />
          </div>
        )}
      )}
      </div>
      <div className='flex justify-between'>
        <label className='text-gray-500 text-sm italic'>{labelLow}</label>
        <label className='text-gray-500 text-sm italic'>{labelHigh}</label>
      </div>    
    </div>
  )
}

export default ScaleSelector;