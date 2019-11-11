import React, { Component } from 'react';
import CourseContainer from './course-components/CourseContainer'

export default class Courses extends Component {

  state = {
    courseList: [],
  }

  async componentDidMount() {
    await this.getCourseList();
  }

  render () {

    const { courseList } = this.state;

    return (
      <div className="bounds">
        <CourseContainer 
          courseList={courseList}
        />
      </div>     
    );
  }

  getCourseList = async () => {
    const { context } = this.props;

    await context.actions.generateCourses()
      .then(data => {
        if (data) {
          this.setState(() => {
            return { courseList: [ data ] };
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

}

