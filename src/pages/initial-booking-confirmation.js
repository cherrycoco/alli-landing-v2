import React from 'react';
import Redirect from '../components/redirect/redirect';

const ExamplePage = ({ location }) => {
  const externalUrl = 'https://alli.io/initial-booking-confirmation/';

  return (
    <Redirect
      to={externalUrl}
      query={location.search}
    />
  );
};

export default ExamplePage;

