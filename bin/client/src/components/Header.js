import React from 'react';
import { Link } from 'react-router-dom';

// Header Class used for the top of every page this component
// shows links back to main course list and displays the currently logged in user
// if one is logged in otherwise it shows links to the sign up and sign out routes
export default class Header extends React.PureComponent {
  render() {

    const { context } = this.props;
    const authUser = context.authenticatedUser;

    return (
      <div className="header">
        <div className="bounds">
          <h1 className="header--logo">
            <Link to="/courses">Courses</Link>
          </h1>
          <nav>

          {/* If the user is authorized then show users first and last name with sign out option
          else show the links to sign up and sign out routes */}
          {
            
            (authUser) ?
              <React.Fragment>
                <span>Welcome, { `${authUser.firstName} ${authUser.lastName}` }!</span>
                <Link to="/signout">Sign Out</Link>
              </React.Fragment>
            :
              <React.Fragment>
                <Link className="signup" to="/signup">Sign Up</Link>
                <Link className="signin" to="/signin">Sign In</Link>
              </React.Fragment>
          }
          </nav>
        </div>
      </div>
  
    );
  }
};