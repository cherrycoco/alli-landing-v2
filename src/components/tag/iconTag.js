import React from 'react';

const IconTag = ({ icon, text }) => {
  return (
    <div className='flex items-center mr-4 bg-primary-100 py-1 px-4 rounded-full'>
      <svg height='24px' width='24px'>
        <path d={icon} fill="#155E75" />
      </svg>
      <p className='text-cyan-800 font-semibold pl-2 m-0 text-sm'>{text}</p>
    </div>
  )
}

export default IconTag;