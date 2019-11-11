import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

  // const { context } = this.props;
  const authUser = props.authenticatedUser;

  return (
    <div className="actions--bar">
      <div className="bounds">
        <div className="grid-100">
        {
          authUser ?
          <React.Fragment>
            <span>
              <Link className="button" to={`/update-course`}>Update Course</Link>
              <Link className="button" to={`/delete-course`}>Delete Course</Link>
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
