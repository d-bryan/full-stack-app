import React from 'react';
import { Link } from 'react-router-dom';


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

        {
          
          (authUser !== null && authUser.id === courseUserID) ?
          <React.Fragment>
            <span>
              <Link className="button" to={`/courses/${match.params.id}/update`}>Update Course</Link>
              <Link className="button" to={`/courses/${match.params.id}/delete`}>Delete Course</Link>
              <Link className="button" to={`/courses/`}>Return to Courses</Link>
            </span>
          </React.Fragment>
          :
          <React.Fragment>
            <span>
              <Link className="button button-secondary" to="/courses">Return to List</Link>
            </span>
          </React.Fragment>
        }
        </div>
      </div>
    </div>  
  );
}
