import React from 'react';
import BasicInput from './basicInput';

const InputLabel = ({ data }) => {
  return (
    <div className={data.className}>
      <label className='block text-sm font-medium leading-6 text-gray-900'>{data.label}</label>
      {data.helperText && <p className='text-gray-500 text-xs italic'>{data.helperText}</p>}
      <BasicInput data={data} />
    </div>
  )
}

export default InputLabel;