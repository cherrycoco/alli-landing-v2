import React from 'react';

const Consent = ({ data }) => {
  const { title, description } = data;
  return (
    <div className='space-y-6 pt-12'>
      <h4 className='pt-8 text-3xl font-bold text-gray-800'>{title}</h4>
      <div className='space-y-6 consent-body text-gray-700' dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
};

export default Consent;