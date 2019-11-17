import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

// User Sign Up class that allows users to create a login
export default class UserSignUp extends Component {

  // set the initial state
  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
    errors: [],
  }

  // Render the element and pass props
  render() {
    const {
      firstName,
      lastName,
      emailAddress,
      password,
      errors,
    } = this.state;

    return (
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign Up</h1>
          <Form 
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Sign Up"
            elements={() => (
              <React.Fragment>
                <input 
                  id="firstName" 
                  name="firstName" 
                  type="text"
                  value={firstName} 
                  onChange={this.change} 
                  placeholder="First Name" />              
                <input 
                  id="lastName" 
                  name="lastName"
                  type="text"
                  value={lastName} 
                  onChange={this.change} 
                  placeholder="Last Name" />
                <input 
                  id="emailAddress" 
                  name="emailAddress" 
                  type="text"
                  value={emailAddress} 
                  onChange={this.change} 
                  placeholder="Email Address" />
                <input 
                  id="password" 
                  name="password"
                  type="password"
                  value={password} 
                  onChange={this.change} 
                  placeholder="Password" />
              </React.Fragment>
            )} />
          <p>
            Already have a user account? <Link to="/signin">Click here</Link> to sign in!
          </p>
        </div>
      </div>
    );
  }

  // Set the state for the form on Change
  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  }

  // submit functions that sends the new user request to the API
  submit = () => {
    const { context } = this.props;

    const {
      firstName,
      lastName,
      emailAddress,
      password,
    } = this.state;

    // New User payload
    const user = {
      firstName,
      lastName,
      emailAddress,
      password,
    };

    // Create the new User and send it to the API
    context.data.createUser(user)
      .then(errors => {
        if (errors.length) {
          this.setState({ errors });
        } else {
          context.actions.signIn(emailAddress, password)
            .then(() => {
              this.props.history.push('/courses');
            });
          console.log(`${emailAddress} is successfully signed up and authenticated.`);
        }
      })
      .catch( err => { // Handle rejected promises
        console.log('There was an Error Creating the User: ',err);
        this.props.history.push('/error'); // push to history stack
      })

  }

  // Return the User to the courses route
  cancel = () => {
    this.props.history.push('/');
  }
}
