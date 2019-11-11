import React from 'react';
import { Link } from 'react-router-dom'

export default () => (
  <div className="bounds">
    <h1>We Have No Courses</h1>
    <p>Sorry about that! Why don't you be the first to make one?</p>
    <Link to="/courses/create">Create A Course</Link>
  </div>
);