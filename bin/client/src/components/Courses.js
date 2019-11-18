import React, { Component } from 'react';
import CourseContainer from './course-components/CourseContainer'

// Generates the Courses from the Database
export default class Courses extends Component {

  state = {
    courseList: [],
    externalData: null,
  }

  // Renders the initial list of courses
  async componentDidMount() {

    this._fetchCourses = await this.getCourseList().then(
      externalData => {
        this._fetchCourses = null;
        this.setState({ externalData });
      }
    );
  }

  // Passes the data through props
  render () {

    const { courseList } = this.state;

    let container;

    if (this.state.externalData === null) {
      container = (
        <div className="bounds">
          <div className="grid-100">
            <h1>Loading...</h1>
          </div>
        </div>
      );
    } else {
      container = (
        <div className="bounds">
          <CourseContainer 
            courseList={courseList}
          />
        </div>
      );
    }

    return ( 
      <div>
        { container }
      </div>
    );
  }

  // Gets the data from the API and sets the components state
  // If there are issues retrieving the data then sends user to /error route
  getCourseList = async () => {
    const { context } = this.props;

    await context.actions.generateCourses()
      .then(data => {
        if (data) {
          this.setState(() => {
            return { courseList: data };
          });
        }
      })
      .catch(err => {
        console.log(err);
        this.props.history.push("/error");
      });
  }
}