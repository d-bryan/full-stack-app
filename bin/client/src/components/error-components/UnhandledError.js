import React from 'react';
import image_500 from '../../assets/img/500.jpg';

export default () => (
  <div className="error--routes">
    <div className="bounds">
      <div className="grid-100">
        <h1>Error</h1>
        <p>There seems to have been an issue on our end.</p>
        <p>Hopefully more things don't break along the way.</p>
        <p>Click
          <a href="/courses" > here </a>
          to go back to the course list.
        </p>        
        <img src={image_500} width="320" height="203" />
      </div>
    </div>
  </div>
)