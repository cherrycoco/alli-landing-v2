import React from 'react';
import Redirect from '../../components/redirect/redirect';

const Intake = ({ location }) => {
  const externalUrl = 'https://alli.io/get-matched/intake-2/';

  return (
    <Redirect
      to={externalUrl}
      query={location.search}
    />
  );
};

export default Intake;

