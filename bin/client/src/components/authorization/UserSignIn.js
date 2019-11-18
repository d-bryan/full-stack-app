import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form';

// User Sign In class that contains form element to submit credentials to API
export default class UserSignIn extends Component {

  // set the intial state
  state = {
    emailAddress: '',
    password: '',
    errors: [],
  }

  // render the user payload to the props
  render() {
    const {
      emailAddress,
      password,
      errors,
    } = this.state;

    return (
      <div className="bounds">
        <div className="grid-33 centered signin">
          <h1>Sign In</h1>
          <Form 
            cancel={this.cancel}
            errors={errors}
            submit={this.submit}
            submitButtonText="Sign In"
            elements={() => (
              <React.Fragment>
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
            Don't have a user account? <Link to="/signup">Click here</Link> to sign up!
          </p>
        </div>
      </div>
    );
  }

  // set the new state of the user from the Form login page
  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  }

  // send the user payload to the API and sign in the user
  // redirect to the previous page they came from or send them to /courses
  submit = () => {
    const { context } = this.props;
    const { from } = this.props.location.state || { from: this.props.history.goBack() };
    const { emailAddress, password } = this.state;

    context.actions.signIn(emailAddress, password)
      .then( user => {
        if (user === null) {
          this.setState(() => {
            return { errors: [ 'Sign-in was unsuccessful' ] };
          });
        } else {
          this.props.history.push(from);
          console.log(`SUCCESS! ${emailAddress} is now signed in!`);
        }
      })
      .catch( err => {
        console.log(err);
        this.props.history.push('/error');
      })

  }

  cancel = () => {
    this.props.history.push('/');
  }
}