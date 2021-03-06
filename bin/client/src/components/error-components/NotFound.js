import React from 'react';
import { Link } from 'react-router-dom';
import image_404 from '../../assets/img/404.jpg';

export default () => (
  <div className="error--routes">
    <div className="bounds">
      <div className="grid-100">
        <h1>Not Found</h1>
        <p>Sorry! We couldn't find the page you're looking for.</p>
        <p>While we attempt to find what you are looking for pay no attention to 
        <br/>
        <br/>
        the little girl having an awesome day with a Lion</p>
        <p>Click
          <Link to="/courses" > here </Link>
          to go back to the course list.
        </p>
        <img src={image_404} height="203" width="320" alt="404 not found" />
      </div>
    </div>
  </div>
);