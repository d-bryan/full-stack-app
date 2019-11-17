import React from 'react';
import Course from './Course';
import NoCourses from '../NoCourses';
import AddCourse from './AddCourse';

// Container element to map course props to the element
export default (props) => {

  const totalCourses = props.courseList;
  let courses;

  if (totalCourses.length) {
    // Map the courses to the frame
    courses = totalCourses.map(data => 
      <Course 
        title={data.title}
        key={data.id}
        id={data.id}
      />
    );
  } else {
    courses = <NoCourses />
  }

  return (
    <div>
      { courses }
      <AddCourse />
    </div>  
  );
}