import React from 'react';
import { Link } from 'react-router-dom'

// A default element for in case there are not courses in the database with a link to create a new course
export default () => (
  <div className="bounds">
    <h3 className="course--add--title">We Have No Courses Currently</h3>
    <p>Sorry about that! Why don't you be the first to make one?</p>
    <Link to="/courses/create">Create A Course</Link>
  </div>
);