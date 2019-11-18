import React, { Component } from 'react';
import CourseCreateElement from './courseCreate-components/CourseCreateElement';

// Create Class that allows user to create new Courses
export default class CreateCourse extends Component {

  // Set the intial state value
  state = {
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
    errors: [],
  }

  // Render the element and pass props 
  render () {

    const { context } = this.props;

    return (
      <div>
        <CourseCreateElement
          context={context}
          title={this.state.title}
          description={this.state.description}
          estimatedTime={this.state.estimatedTime}
          materialsNeeded={this.state.materialsNeeded}
          change={this.change}
          submit={this.submit}
          errors={this.state.errors}
          cancel={this.cancel}
        />
      </div>
    );
  }

  // allow the user to return to courses route
  cancel = () => {
    this.props.history.push(`/courses`);
  }

  // submit function that creates a new course and posts to the API
  submit = async () => {
    const { context } = this.props;
    const authUser = context.authenticatedUser.data;
    const userName = context.authenticatedUser.firstName;
    const userId = context.authenticatedUser.id;

    // Destructure state to be used when submitting to API
    const { 
      title,
      description,
      estimatedTime,
      materialsNeeded,
    } = this.state;

    // New created course to be submitted to the API
    const createdCourse = {
      title,
      description,
      estimatedTime,
      materialsNeeded,
      userId
    };

    // Create the new course and send to the API
    await context.data.createCourse(createdCourse, authUser)
      .then(errors => {
        // If there are errors display them to the user before allowing submission
        if (errors.length) {
          this.setState({ errors });
        } else {
          // redirect the user back to the courses route upon submission
          this.props.history.push('/courses');
          
          this.setState(() => {
            return {
            title: createdCourse.title,
            description: createdCourse.description,
            estimatedTime: createdCourse.estimatedTime,
            materialsNeeded: createdCourse.materialsNeeded,
            userId: createdCourse.userId
            }
          });
          console.log(`${userName} created a new course: \n
          title: ${createdCourse.title} \n
          description: ${createdCourse.description} \n
          estimatedTime: ${createdCourse.estimatedTime} \n
          materialsNeeded: ${createdCourse.materialsNeeded} \n
          userId: ${createdCourse.userId}`);
        }
      })
      .catch(err => {
        // Send the User to the errors route if there was an error creating a new course and log info to the console
        console.log("There was an Error while creating the course: ",err);
        this.props.history.push("/error");
      });
  }

  // Set the state for the Form on Change
  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  }
}