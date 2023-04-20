import React, { useEffect } from 'react';
import Loading from '../loading/loading';

const ExternalRedirect = ({ to, query }) => {
  useEffect(() => {
    const url = `${to}${query}`;
    window.location.href = url;
  }, [to, query]);

  return <Loading />;
};

export default ExternalRedirect;
