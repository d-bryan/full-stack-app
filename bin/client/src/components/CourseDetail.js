import React, { Component } from 'react';
import ActionsBar from './courseDetail-components/ActionsBar';
import CourseDetailElement from './courseDetail-components/CourseDetailElement'


export default class CourseDetail extends Component {

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

  async getCourseDetails () {
    const { context } = this.props;
    console.log(context.authenticatedUser);

    await context.actions.generateCourseDetail(this.props.match.params.id)
      .then(data => {
        if (data === 'Sorry we cannot find that course.') {
          console.log(data);

          this.props.history.push('/not-found');
          // this.setState(() => {
          //   return { course: [data] };
          // });


          // this.setState(() => {
          //   return { 
          //     id: data.id,
          //     userId: data.userId,
          //     title: data.title,
          //     description: data.description,
          //     estimatedTime: data.estimatedTime,
          //     materialsNeeded: data.materialsNeeded,
          //     firstName: data.User.firstName,
          //     lastName: data.User.lastName,
          //     emailAddress: data.User.emailAddress
          //   }            
          // });

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
        console.log('There was an error while retrieving the course: ',err);
      });
  }
}
