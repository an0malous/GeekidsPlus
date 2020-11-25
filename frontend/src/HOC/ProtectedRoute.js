import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({component: Component, loggedIn, role, accessLevel, ...rest }) => (
    <Route
      {...rest}
      render={props => {
        return loggedIn && role >= accessLevel ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        );
       
      }}
    />
  );

  export default ProtectedRoute;