import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AdminDashboard from '../pages/admin-dashboard/AdminDashboard';
import UserDashboard from '../components/user-dashboard/user-dashboard.component';

const RenderDashboard = ({loggedIn, role, accessLevel, ...rest }) => (
    <Route
      {...rest}
      render={()=> {
        return loggedIn && role >= 3 ? (
          <AdminDashboard {...rest}/>
        ) : (
            <UserDashboard {...rest}/>
        );
       
      }}
    />
  );

  export default RenderDashboard;