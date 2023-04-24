import React from 'react';
import Redirect from '../components/redirect/redirect';

const RedirectPage = ({ location }) => {
  const externalUrl = 'https://app.alli.io/join-us/practicum-program';

  return (
    <Redirect
      to={externalUrl}
      query={location.search}
    />
  );
};

export default RedirectPage;

