import config from './api-config';

export default class Data {

  /**
   *  Fetches the requests to the API
   * @param {URL} path - Path to API url
   * @param {Request} method - HTTP Request Method 
   * @param {Header} body - Header option values to include
   * @param {Boolean} requiresAuth - True | False value for whether route needs authorization
   * @param {Object} credentials - Pass credentials through for authorization
   */
  api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
    // API URL path + route
    const url = config.apiBaseUrl + path;

    // Request Header Options
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    // Convert body to JSON string if NOT null
    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    // If the path required credentials pass them in the header
    if (requiresAuth) {
      const encodedCredentials = btoa(`${credentials.username}:${credentials.password}`);

      options.headers['Authorization'] = `Basic ${encodedCredentials}`;
    }

    // fetch the url with the parameters and header options
    return fetch(url, options);
  }

  /**
   * Authorizes the user 
   * @param {Username} username - Users username for login
   * @param {Password} password - Users password for login
   */
  async getUser (username, password) {
    // Route && Request Parameters
    const response = await this.api('/users', 'GET', null, true, { username, password });

    // Authenticate the users login
    if (response.status === 200) {
      return response.json().then(data => data);
    } else if (response.status === 401) {
      return null;
    } else {
      throw new Error('There was an issue when attempting to get this user.');
    }
  }

  /**
   * Creates a new users and passes to the API for authenitcation
   * @param {Object} user - Input parameters from the user to create user
   */
  async createUser (user) {
    // Route && Request Parameters
    const response = await this.api('/users', 'POST', user);

    // Validate the response from the API for client side
    if (response.status === 201) {
      return [];
    } else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors;
      });
    } else {
      throw new Error('There was an issue when attempting to create the new user.');
    }
  }

  /**
   * Retrieves a list of all the courses in the database
   */
  async getCourses () {
    // Route && Request Parameters
    const response = await this.api('/courses', 'GET');

    // Validate the response from the API for the client
    if (response.status === 200) {
      return response.json().then(data => data[0]);
    } else {
      throw new Error('There was an issue when attempting to get the course list.');
    }
  }

  /**
   * Retrieves an Idividual Course from the API
   * @param {Number} id - Course ID Number
   */
  async getCourse(id) {
    // Route && Request Parameters
    const response = await this.api(`/courses/${id}`, 'GET');

    // Validate the response from the API for the client
    if (response.status === 200) {
      return response.json().then(data => data);
    } else if (response.status === 404) { 
      return response.json().then(data => {
        return data.message;
      });
    } else {
      throw new Error('There was an issue when attempting to locate the course.');
    }
  }

  /**
   * POSTS New Course Data to the API
   * @param {Object} courseInfo - Course Object to be added to DB
   */
  createCourse (courseInfo) {
    // Route && Request Parameters
    const response = await this.api('/courses', 'POST', courseInfo, true, { username, password });

    // Validate the response from the API for the client
    if (response.status === 201) {
      return [];
    } else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors;
      });
    } else if (response.status === 403) {
      return response.json().then(data => {
        return data.message.client;
      });
    } else {
      throw new Error('There was an issue when attempting to create the course.');
    }
  }

  /**
   * PUT - Updates the currently selected course
   * @param {Number} id - Course ID number
   * @param {Object} courseInfo - Request Body info
   */
  updateCourse (id, courseInfo) {
    // Route && Request Parameters
    const response = await this.api(`/courses/${id}`, 'PUT', courseInfo, true, { username, password });

    // Validate the response from the API for the client
    if (response.status === 204) {
      return [];
    } else if (response.status === 404) {
      return response.json().then(data => {
        return data.message.client;
      });
    } else if (response.status === 400) {
      return response.json().then(data => {
        return data.message.client;
      });
    } else if (response.status === 403) {
      return response.json().then(data => {
        return data.message.client;
      });
    } else {
      throw new Error('There was an issue attempting to update the course.');
    }
  }


  deleteCourse (id) {
    // Route && Request Parameters
    const response = await this.api(`/courses/${id}`, 'DELETE', null, true, { username, password });

    // Validate the response from the API for the client
    if (response.status === 204) {
      return [];
    } else if (response.status === 403) {
      return response.json().then(data => {
        return data.message.client;
      });
    } else if (response.status === 404) {
      return response.json().then(data => {
        return data.message.client;
      });
    } else {
      throw new Error('There was an issue attempting to delete the course');
    }
  }
};