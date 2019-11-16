import React, { Component } from 'react';
import Data from './Data';
import Cookies from 'js-cookie';

const Context = React.createContext();

export class Provider extends Component {

  // Set the state to the authenticated user or null
  state = {
    authenticatedUser: Cookies.getJSON('authenticatedUser') || null,
    errors: [],
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
        createCourse: this.createCourse,
        updateCourse: this.updateCourse,
        deleteCourse: this.deleteCourse,
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
      user.data = btoa(`${username}:${password}`);
      localStorage.setItem('user', JSON.stringify(user));
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

  /**
   * Retrieves a list of all the courses in the database
   */  
  generateCourses = async() => {
    const courses = await this.data.getCourses();
    return courses;
  }

  /**
   * Retrieves an Idividual Course from the API
   * @param {Number} id - Course ID Number
   */  
  generateCourseDetail = async(id) => {
    const course = await this.data.getCourse(id);
    return course;
  }

  /**
   * POSTS New Course Data to the API
   * @param {Object} courseInfo - Course Object to be added to DB
   * @param {Object} credentials - Users credential login info
   */  
  createCourse = async(courseInfo, credentials) => {
    const course = await this.data.createCourse(courseInfo, credentials);
    return course;
  }

  /**
   * PUT - Updates the currently selected course
   * @param {Number} id - Course ID number
   * @param {Object} courseInfo - Request Body info
   * @param {Object} credentials - Users credential login info
   */  
  updateCourse = async(id, courseInfo, credentials) => {
    const course = await this.data.updateCourse(id, courseInfo, credentials);
    return course;
  }

  /**
   * DELETE - Deletes a selected Course from the DB
   * @param {Integer} id - Course ID Number
   * @param {Object} credentials - Users credential login info
   */  
  deleteCourse = async(id, credentials) => {
    const course = await this.data.deleteCourse(id, credentials);
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