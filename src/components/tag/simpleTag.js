import React from 'react';

const SimpleTag = ({ text }) => {
  return (
    <div className={`bg-primary-100 py-2 px-4 rounded-full inline-block m-1`}>
      <p className={`text-cyan-800 font-semibold pl-2 m-0 text-sm`}>{text}</p>
    </div>
  )
}

export default SimpleTag;