import React, { Component } from 'react';
import CourseUpdateElement from './courseUpdate-components/CourseUpdateElement';

// Update Course Component that allows User to change the details of course items
export default class UpdateCourse extends Component {

  // Set the initial state values
  state = {
    id: '',
    userId: '',
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    errors: [],
  }

  render () {

    // Pass state values down to props to allow their values to be read/edited
    const { 
      id,
      userId,
      title,
      description,
      estimatedTime,
      materialsNeeded,
      firstName,
      lastName,
      emailAddress,
      errors,
    } = this.state;

    // Return the Component with the Form element
    return (
      <div>
        <CourseUpdateElement
          id={id}
          userId={userId}
          title={title}
          description={description}
          estimatedTime={estimatedTime}
          materialsNeeded={materialsNeeded}
          firstName={firstName}
          lastName={lastName}
          emailAddress={emailAddress}
          cancel={this.cancel}
          submit={this.submit}
          handleChange={this.change}
          errors={errors}
        />
      </div>
    );
  }

  // Mount the component with the intial details from the API
  componentDidMount () {
    this.getCourseDetails();
  }

  // Get the intial course getails from the API
  getCourseDetails () {
    const { context } = this.props;

    // Set the intial state from what was retrieved from the API
    context.actions.generateCourseDetail(this.props.match.params.id)
      .then((data) => {

        if (data === 'Sorry we cannot find that course.') {
          console.log("The course you are looking for does not exist: ",data);

          this.props.history.push('/not-found');
        } else {
          this.setState(() => {
            return {
              id: data.id,
              userId: data.userId,
              title: data.title,
              description: data.description,
              estimatedTime: data.estimatedTime,
              materialsNeeded: data.materialsNeeded,
              firstName: data.User.firstName,
              lastName: data.User.lastName,
              emailAddress: data.User.emailAddress
            }            
          });
        }
      })
      .catch(err => {
        // Push the user to the error route if the API crashes
        console.log("There was an error retreiving course details to edit with the Update Course Component: ",err);
        this.props.history.push("/error");
      });    
  }

  // Allow the user to cancel and return to the Details route
  cancel = () => {
    this.props.history.push(`/courses/${this.props.match.params.id}`);
  }

  // Submitting the form sets new state from what the User has changed
  submit = async () => {
    const { context } = this.props;
    const authUser = context.authenticatedUser.data;

    // Destructure the State for use in updating
    const { 
      id,
      title,
      description,
      estimatedTime,
      materialsNeeded,
    } = this.state;

    // New course payload to send to API
    const updatedCourse = {
      title,
      description,
      estimatedTime,
      materialsNeeded,
    };

    // Update the API with the new information || if there are errors display them to the user prior to submitting
    await context.actions.updateCourse(id, updatedCourse, authUser)
      .then(errors => {
        if (errors.length) {
          if (errors === 403){
            this.props.history.push("/unauthorized");
          } else {
            console.log(errors);
            this.setState({ errors });
          }
          
        } else {
          console.log(this.state);
          this.setState(() => {
            return {
            title: updatedCourse.title,
            description: updatedCourse.description,
            estimatedTime: updatedCourse.estimatedTime,
            materialsNeeded: updatedCourse.materialsNeeded
            }
          });

          // Redirect the user back to the updated page
          this.props.history.push(`/courses/${this.props.match.params.id}`);
        }
      })
      .catch(err => {
        // Send the user to the errors route if there was an error
        this.props.history.push('/error');
        console.log('There was an Error Updating the course: ',err);
      });
  }

  // Sets the state for the Form on Change
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