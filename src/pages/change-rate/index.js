import React from 'react';
import Redirect from '../../components/redirect/redirect';

const ChangeRate = ({ location }) => {
  const externalUrl = 'https://app.alli.io/change-rate';

  return (
    <Redirect
      to={externalUrl}
      query={location.search}
    />
  );
};

export default ChangeRate;

