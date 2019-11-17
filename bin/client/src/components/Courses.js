import React, { Component } from 'react';
import CourseContainer from './course-components/CourseContainer'

// Generates the Courses from the Database
export default class Courses extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state.courseList = React.createRef();
  //   console.log(props);
  // }

  state = {
    courseList: [],
    externalData: null,
  }

  // getSnapshotBeforeUpdate(prevState, currState) {
  // }

  checkForUpdates () {
    // const { courseList } = this.state;
    // const courseArrayLength = courseList.length;

    console.log(this.props.location.state);

    if (this.props.location.state === "deleteCourse") {
      this.forceUpdate();
    }

    // if (courseArrayLength === courseArrayLength) {
    //   return false;
    // } else if () {

    // } else {

    // }

  }

  // const { from } = this.props.location.state || { from: { pathname: '/courses' } };

  // Renders the initial list of courses
  async componentDidMount() {

    console.log(this.props.location.state);

    this._fetchCourses = await this.getCourseList().then(
      externalData => {
        this._fetchCourses = null;
        this.setState({ externalData });
      }
    );

    // if (this.props.location.state == "deleteCourse") {
    //   this._fetchCourses = this.getCourseList();
    // }

    // await this.forceUpdate();
    // await this.checkForUpdates();
    // console.log(this.state);
  }

  // Re-Renders the list of courses after deleting/updating
  // componentWillUpdate() {
    
  // }

  // componentWillUnmount() {
  //   if (this._fetchCourses) {
  //     this._fetchCourses.cancel();
  //   }
  // }

  // Passes the data through props
  render () {

    // const courseArrayLength = this.state.courseList.length;
    // console.log(courseArrayLength);

    

    const { courseList } = this.state;
    // console.log(courseList.length);

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
      // <div className="bounds">
      //   <CourseContainer 
      //     courseList={courseList}
      //   />
      // </div>
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