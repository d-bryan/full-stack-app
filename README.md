# Full Stack App with React and a REST API

## Additional README

####  [React Client](./bin/client/README.md)
####  [Express API](./bin/api/README.md)

## Grading Requirements

## React Project
### Meets Expectations

Project set up using create-react-app.

The React project's folder is named client.

No warnings or errors in console about unused/missing assets.

Running npm start launches the app.

## REST API
### Meets Expectations

The REST API project's folder is named api.

The REST API has been updated with support for Cross-Origin Resource Sharing (CORS).

## Stateful Class Components
### Meets Expectations

The app contains the following stateful class components:

  - `Courses` - The component retrieves the list of courses from the REST API, renders a list of courses, links each course to its respective "Course Detail" screen, and renders a link to the "Create Course" screen. 

  - `CourseDetail` - The component retrieves the detail for a course from the REST API, renders the course details, an "Update Course" button for navigating to the "Update Course" screen, and a "Delete Course" button that when clicked sends a DELETE request to the REST API to delete a course.

  - `UserSignIn` - The component renders a form allowing the user to sign using their existing account information, a "Sign In" button that when clicked signs in the user, and a "Cancel" button that returns the user to the default route (i.e. the list of courses).

  - `UserSignUp` - The component renders a form allowing a user to sign up by creating a new account, a "Sign Up" button that when clicked sends a POST request to the REST API's /api/users route and signs in the user, and a "Cancel" button that returns the user to the default route (i.e. the list of courses).

  - `CreateCourse` - The component renders a form allowing a user to create a new course, a "Create Course" button that when clicked sends a POST request to the REST API's /api/courses route, and a "Cancel" button that returns the user to the default route (i.e. the list of courses).

  - `UpdateCourse` - The component renders a form allowing a user to update one of their existing courses, an "Update Course" button that when clicked sends a PUT request to the REST API's /api/courses/:id route, and a "Cancel" button that returns the user to the "Course Detail" screen.


### Exceeds Expectations

The `CourseDetail` component redirects users to the `/notfound` path if the requested course isn't returned from the REST API.

The `UserSignIn` component redirects users back to the previous screen after successfully signing in.

The `UpdateCourse` component:

  -  Redirects users to the /notfound path if the requested course isn't returned from the REST API.
  -  Redirects users to the /forbidden path if the requested course isn't owned by the authenticated user.

Components redirect users to the `/error` path when requests to the REST API return a `500 Internal Server Error` HTTP status code.

## Stateless Functional Components
### Meets Expectations

The app contains the following stateless functional components:

  `Header` - The component renders the top menu bar and buttons for signing in and signing up (if there's not an authenticated user) or the user's first and last name and a button for signing out (if there's an authenticated user).

  `UserSignOut` - The component signs out the authenticated user and redirects the user to the default route (i.e. the list of courses).


### Exceeds Expectations

The app contains the following stateless functional components:

  `NotFound` - The component renders a message letting the user know that the requested page can't be found.
  `Forbidden` - The component renders a message letting the user know that they can't access the requested page.
  `UnhandledError` - The component renders a message letting the user know that an unexpected error has occurred.


## Routes
### Meets Expectations

The `react-router-dom` npm package is installed and listed as a dependency in the `package.json` file.

Clicking a link navigates the user to the correct route and displays the appropriate info.

The current route is always reflected in the URL.

The following routes are configured (listed in the format path - component):

  -  / - Courses
  -  /courses/create - CreateCourse
  -  /courses/:id/update - UpdateCourse
  -  /courses/:id - CourseDetail
  -  /signin - UserSignIn
  -  /signup - UserSignUp
  -  /signout - UserSignOut

### Exceeds Expectations

The following routes are configured (listed in the format path - component):

  -  /notfound - NotFound
  -  /forbidden - Forbidden
  -  /error - UnhandledError

React Router is configured so that if a route isn't matched the NotFound component is rendered.

## User Authentication
### Meets Expectations

The app's global state is kept in the App component or managed using the React Context API.

A `signIn()` method is globally available that:
Authenticates a user using their email address and password.
Persists the authenticated user's information (including their password) in the global state.

A `signOut()` method is globally available that removes the authenticated user's information (including their password) from the global state.

### Exceeds Expectations

The app persists user credentials using an HTTP cookie or local storage so that the user's authenticated state is maintained even if the application is reloaded or loaded into a new browser tab.

## Protected Routes
### Meets Expectations

The app contains a higher-order component (HOC) named `PrivateRoute` that is used to configure protected routes (i.e. routes that require authentication).

The following routes are configured using the `PrivateRoute` component:

  -  /courses/create
  -  /courses/:id/update

## User Authorization
### Meets Expectations

The CourseDetail component only renders the `Update Course` and `Delete Course` buttons if:

  - There's an authenticated user.
  - The authenticated user's ID matches that of the user who owns the course.

## Validation Errors
### Meets Expectations

The `Sign Up`, `Create Course`, and `Update Course` screens display validation errors returned from the REST API.

## Markdown Support
### Meets Expectations

The `Course Detail` screen renders the course description and materialsNeeded properties as markdown formatted text.

## HTML and CSS
### Meets Expectations

Provided HTML and CSS is used and the important aspects of the app generally resemble the mockups.

## Valid JavaScript
### Meets Expectations

Free of syntax errors.

## Code Comments
### Meets Expectations

Detailed code comments explaining how your functions work.
