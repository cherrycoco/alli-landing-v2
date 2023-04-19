import React from 'react';

const Bio = ({ bio }) => {
  return (
    <div>
      {bio.split('|').map((paragraph, i) => <p className="mb-4 text-gray-600" key={i}>{paragraph}</p>)}
    </div>
  )
}

export default Bio;