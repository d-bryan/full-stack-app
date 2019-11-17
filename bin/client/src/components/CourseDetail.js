import React, { Component } from 'react';
import ActionsBar from './courseDetail-components/ActionsBar';
import CourseDetailElement from './courseDetail-components/CourseDetailElement'

// Course Detail Component for Displaying returned course to the user
export default class CourseDetail extends Component {

  // set the intial state
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
  }

  // Mount the new details to the page
  async componentDidMount() {
    await this.getCourseDetails();
  }

  render () {

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
    } = this.state;

    const { context } = this.props;
    
    return (
      <div>
        <ActionsBar 
          context={context}
          userId={userId}
          match={this.props.match}
        />
        <CourseDetailElement
          id={id}
          userId={userId}
          title={title}
          description={description}
          estimatedTime={estimatedTime}
          materialsNeeded={materialsNeeded}
          firstName={firstName}
          lastName={lastName}
          emailAddress={emailAddress}
        />
      </div>
    );
  }

  // get the course details from the API and set the state for the component
  async getCourseDetails () {
    const { context } = this.props;

    await context.actions.generateCourseDetail(this.props.match.params.id)
      .then(data => {
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
      // log the error to the console and send the user to the error route
      .catch(err => {
        console.log('There was an error while retrieving the course: ',err);
        this.props.history.push('/error');
      });
  }
}
