import React from 'react';
import Redirect from '../../components/redirect/redirect';

const MatchRedirect = ({ location }) => {
  const externalUrl = '/get-started/matched/';

  return (
    <Redirect
      to={externalUrl}
      query={location.search}
    />
  );
};

export default MatchRedirect;

