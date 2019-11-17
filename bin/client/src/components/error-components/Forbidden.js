import React from 'react';
import image_403 from '../../assets/img/403.jpg';

export default () => (
  <div className="error--routes">
    <div className="bounds">
      <div className="grid-100">
        <h1>Forbidden</h1>
        <p>The page that you are attempting to access is not allowed.</p>
        <p>There is secret information on there that most users aren't allowed to see.</p>
        <p>Click
          <a href="/courses" > here </a>
          to go back to the course list.
        </p>        
        <img src={image_403} height="320" width="320" alt="403 unauthorized" />
      </div>
    </div>
  </div>
)