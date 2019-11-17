import React from 'react';
// import { Link, Redirect } from 'react-router-dom';

// Allows the User to Delete courses from the database
export default class DeleteCourse extends React.PureComponent {
  render () {

  const { context } = this.props;
  const courseId = parseInt(this.props.match.params.id, 10);
  const authUser = context.authenticatedUser.data;

  // Deletes the course from the database
  const delCourse = () => {

    if (this.props.location.state === undefined) {
      this.props.history.push('/forbidden');
    } else if (this.props.location.state.courseUserId === undefined || this.props.location.state.courseUserId === null) {
      this.props.history.push('/forbidden');
    } else if (this.props.location.state.currentUser === undefined || this.props.location.state.currentUser === null) {
      this.props.history.push('/forbidden');
    }else {
      context.actions.deleteCourse(courseId, authUser);
      this.props.history.push("/courses", "deleteCourse");
    }
  }

  // Sends the user back to the course details page
  const cancel = () => {
    this.props.history.push(`/courses/${courseId}`);
  }
    return (
        <div className="bounds">
          <div className="grid-100">
            <h1>Are You Sure You Want to Delete This Course?</h1>
              <div className="grid-100 pad-bottom">
                <button className="button" type="submit" onClick={delCourse}>Delete Course</button>
                <button className="button button-secondary" onClick={cancel}>Cancel</button>
              </div>
          </div>
        </div>
    );
  }
}
