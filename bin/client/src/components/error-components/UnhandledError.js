import React from 'react';
import { Link } from 'react-router-dom';
import image_500 from '../../assets/img/500.jpg';

export default () => (
  <div className="error--routes">
    <div className="bounds">
      <div className="grid-100">
        <h1>Error</h1>
        <p>There seems to have been an issue on our end.</p>
        <p>Hopefully more things don't break along the way.</p>
        <p>Click
          <Link to="/courses" > here </Link>
          to go back to the course list.
        </p>        
        <img src={image_500} width="320" height="203" alt="500 error" />
      </div>
    </div>
  </div>
)