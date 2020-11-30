import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AdminDashboard from '../pages/admin-dashboard/AdminDashboard';
import UserDashboard from '../components/user-dashboard/user-dashboard.component';
import { connect } from 'react-redux';

const RenderDashboard = ({user: {loggedIn, role}, ...rest }) => (
    <Route
      {...rest}
      render={({ match})=> {
        return loggedIn && role >= 3 ? (
          
          <AdminDashboard match={match}{...rest}/>
        ) : (
            <UserDashboard {...rest}/>
        );
       
      }}
    />
  );

  const mapStateToProps = state => ({
    user: state.userReducer.currentUser
  });
  export default connect(mapStateToProps)(RenderDashboard);