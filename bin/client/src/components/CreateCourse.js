import React, { Component } from 'react';
import CourseCreateElement from './courseCreate-components/CourseCreateElement';



export default class CreateCourse extends Component {

  state = {
    title: '',
    description: '',
    estimatedTime: '',
    materialsNeeded: '',
    errors: [],
  }

  render () {


    return (
      <div>
        <CourseCreateElement 
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

  cancel = () => {
    this.props.history.push(`/courses`);
  }

  submit = async () => {
    // console.log('hello');
    const { context } = this.props;
    const authUser = context.authenticatedUser.data;
    const userId = context.authenticatedUser.id;

    const { 
      title,
      description,
      estimatedTime,
      materialsNeeded,
      errors
    } = this.state;

    const createdCourse = {
      title,
      description,
      estimatedTime,
      materialsNeeded,
      userId
    };

    console.log(authUser);

    await context.data.createCourse(createdCourse, authUser)
      .then(errors => {
        if (errors.length) {
          this.setState({ errors });
        } else {
          this.setState(() => {
            return {
            title: createdCourse.title,
            description: createdCourse.description,
            estimatedTime: createdCourse.estimatedTime,
            materialsNeeded: createdCourse.materialsNeeded,
            userId: createdCourse.userId
            }
          });

          console.log(this.props.location.pathname);

        }
      })
      .then(res => console.log(res.location))
      .catch(err => {
        console.log(err);
      });
    
      // this.props.history.push(`/courses/${this.props.match.params.id}`);
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