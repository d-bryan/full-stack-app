import React, { Component } from 'react';
import CourseUpdateElement from './courseUpdate-components/CourseUpdateElement';

export default class UpdateCourse extends Component {

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
    // const { context } = this.props;
    // const authUser = context.authenticatedUser;

    return (
      <div>
        <CourseUpdateElement
          // context={context}
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

  componentDidMount () {
    // const { context } = this.props;

    this.getCourseDetails();
    // console.log(context);

    // const { context } = this.props;
    // const course = await context.actions.generateCourseDetail(this.props.match.params.id);
  }

  getCourseDetails () {
    const { context } = this.props;

    context.actions.generateCourseDetail(this.props.match.params.id)
      .then((data, errors) => {
        // if (errors) {
        //   this.setState({ errors });          
        // } else {
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
        // }
      })
      .catch(err => {
        console.log(err);
      });    
  }

  cancel = () => {
    this.props.history.push(`/courses/${this.props.match.params.id}`);
  }

  submit = async () => {
    // console.log('hello');
    const { context } = this.props;
    const authUser = context.authenticatedUser.data;
    // const update = await context.data.updateCourse(id, updatedCourse, authUser);

    const { 
      id,
      title,
      description,
      estimatedTime,
      materialsNeeded,
    } = this.state;

    const updatedCourse = {
      title,
      description,
      estimatedTime,
      materialsNeeded,
    };

    // const user = {
    //   userId,
    //   firstName,
    //   lastName,
    //   emailAddress,
    // };

    console.log(authUser);

    await context.actions.updateCourse(id, updatedCourse, authUser)
      .then(errors => {
        if (errors.length) {
          console.log(errors);
          this.setState({ errors });

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

          this.props.history.push(`/courses/${this.props.match.params.id}`);
        }
      })
      .catch(err => {
        
        this.props.history.push('/error');
        console.log('There was an Error Updating the course: ',err);
      });
  }

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