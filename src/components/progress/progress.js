import React from 'react';

const Progress = ({ current, total }) => {
  return (
    <div>
      <div className="mb-1 w-60 rounded-lg h-2 bg-primary-100">
        <div className="h-2 rounded-lg bg-cyan-800" style={{width: `${current/total*100}%`}}></div>
      </div>
      <p>{`${current} / ${total}`}</p>
    </div>
  )
}

export default Progress;