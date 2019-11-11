import React, { Component } from 'react';
import Data from './Data';
import Cookies from 'js-cookie';

const Context = React.createContext();

export class Provider extends Component {

  // Set the state to the authenticated user or null
  state = {
    authenticatedUser: Cookies.getJSON('authenticatedUser') || null
  }

  // Create a new instance of the Data Class
  constructor() {
    super();
    this.data = new Data();
  }

  // Pass the methods through props
  render() {
    const { authenticatedUser } = this.state;

    const value = {
      authenticatedUser,
      data: this.data,
      actions: { // Add the 'actions' property and object
        signIn: this.signIn,
        signOut: this.signOut,
        generateCourses: this.generateCourses,
        generateCourseDetail: this.generateCourseDetail,
      },
    }

    return (
      <Context.Provider value={ value }>
        {this.props.children}
      </Context.Provider>  
    );
  }

  /**
   * Signs in the user and sets a cookie for 24 hours
   * @param {Username} username - Users username for login
   * @param {Password} password - Users password for login
   */
  signIn = async (username, password) => {
    const user = await this.data.getUser(username, password);

    if (user !== null) {
      this.setState(() => {
        return {
          authenticatedUser: user,
        };
      });
      Cookies.set('authenticatedUser', JSON.stringify(user), { expires: 1 });
    }

    return user;
  }

  /**
   * Signs out the user and removes the set cookie
   */  
  signOut = () => {
    this.setState(() => {
      return {
        authenticatedUser: null,
      };
    });
    Cookies.remove('authenticatedUser');
  }

  generateCourses = async() => {
    const courses = await this.data.getCourses();
    return courses;
  }

  generateCourseDetail = async(id) => {
    const course = await this.data.getCourse(id);
    return course;
  }

}

export const Consumer = Context.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  }
}