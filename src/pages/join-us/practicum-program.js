import React from 'react';
import ExternalRedirect from '../../components/redirect/redirect';

const RedirectPage = ({ location }) => {
  const externalUrl = 'https://app.alli.io/join-us/practicum-program';

  return (
    <ExternalRedirect
      to={externalUrl}
      query={location.search}
    />
  );
};

export default RedirectPage;

