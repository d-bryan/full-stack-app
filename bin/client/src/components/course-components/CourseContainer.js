import React from 'react';
import Course from './Course';
import NoCourses from '../NoCourses';

export default (props) => {

  const totalCourses = props.courseList;
  let courses;

  if (totalCourses.length) {
    // Map the courses to the frame
    courses = totalCourses[0].map(data => 
      <Course 
        title={data.title}
        key={data.id}
        id={data.id}
      />
    );
  } else {
    courses = <NoCourses />
  }
  // console.log(totalCourses);
  return (
    <div>
      { courses }
    </div>  
  );
}