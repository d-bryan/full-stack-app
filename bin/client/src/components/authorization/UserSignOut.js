import React from 'react';
import { Redirect } from 'react-router-dom';

// Signs the user out and redirects back to the home route
export default ({ context }) => {

  context.actions.signOut();

  return (
    <Redirect to="/" />
  );
}
