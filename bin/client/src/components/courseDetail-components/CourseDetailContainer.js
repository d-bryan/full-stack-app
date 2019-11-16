import React from 'react';
import NotFound from '../NotFound';
import CourseDetailElement from './CourseDetailElement';


export default (props) => {

  const courseDetails = props.course;
  let course;

  // console.log(courseDetails);
  // console.log(props);

  if (courseDetails) {
    // map the course details to the frame
    course = courseDetails.map(data => {
      return (

        <CourseDetailElement 
          id={data.id}
          userId={data.userId}
          title={data.title}
          description={data.description}
          estimatedTime={data.estimatedTime}
          materialsNeeded={data.materialsNeeded}
          firstName={data.User.firstName}
          lastName={data.User.lastName}
          emailAddress={data.User.emailAddress}
          key={data.id}
        />
      );
    });
  } else {
    course = <NotFound />
  }

  return (
    <div>
      { course }
    </div>
  );
}
