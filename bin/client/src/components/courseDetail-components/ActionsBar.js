import React from 'react';
import { Link } from 'react-router-dom';

// Action bar to determine whether or not a user has authentication and where to send them
export default (props) => {

  const authUser = props.context.authenticatedUser;
  const match = props.match;
  const courseUserID = props.userId;
  

  return (
    <div className="actions--bar">
      <div className="bounds">
        <div className="grid-100">

        {/* Ternary operator to only display update and delete options to the users who own the course
        otherwise they will only be shown a link to return to the course list */}

        {/* `/courses/${match.params.id}/update`, */}

        {
          
          (authUser !== null && authUser.id === courseUserID) ?
          <React.Fragment>
            <span>
              <Link 
                className="button"
                to={{
                  pathname: (authUser.id === courseUserID) ? `/courses/${match.params.id}/update` : '/foribidden',
                  state: {
                    courseUserId: courseUserID || null,
                    currentUser: authUser.id || null,
                  }
                  }}>Update Course</Link>
              <Link 
                className="button"
                to={{
                  pathname: `/courses/${match.params.id}/delete`,
                  state: { 
                    courseUserId: courseUserID || null,
                    currentUser: authUser.id || null,
                    },
                  }}>Delete Course</Link>
              <Link 
                className="button" 
                to={`/courses/`}>Return to Courses</Link>
            </span>
          </React.Fragment>
          :
          <React.Fragment>
            <span>
              <Link 
                className="button button-secondary" 
                to="/courses">Return to List</Link>
            </span>
          </React.Fragment>
        }
        </div>
      </div>
    </div>  
  );
}
