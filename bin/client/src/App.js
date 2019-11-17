// import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// Import Components
import Header from './components/Header';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import UpdateCourse from './components/UpdateCourse';
import DeleteCourse from './components/DeleteCourse';
import NotFound from './components/error-components/NotFound';
import Forbidden from './components/error-components/Forbidden';
import UnhandledError from './components/error-components/UnhandledError';
import UserSignUp from './components/authorization/UserSignUp';
import UserSignIn from './components/authorization/UserSignIn';
import UserSignOut from './components/authorization/UserSignOut';
import withContext from './Context';
import PrivateRoute from './PrivateRoute';

// Add Context to Components
const HeaderWithContext = withContext(Header);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);
const CreateCourseWithContext = withContext(CreateCourse);
const UpdateCourseWithContext = withContext(UpdateCourse);
const DeleteCourseWithContext = withContext(DeleteCourse);



export default () => (
  <Router>
    <div>
      <HeaderWithContext />
      <hr/>

      <Switch>
        <Redirect exact from="/" to="/courses" />
        
        <PrivateRoute path="/courses/create" component={CreateCourseWithContext} />
        <PrivateRoute path="/courses/:id/update" component={UpdateCourseWithContext} />
        <PrivateRoute path="/courses/:id/delete" component={DeleteCourseWithContext} />
        <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signup" component={UserSignUpWithContext} />
        <Route path="/signout" component={UserSignOutWithContext} />
        <Route path="/courses/:id" component={CourseDetailWithContext} />
        <Route path="/courses" component={CoursesWithContext} />
        <Route path="/forbidden" component={Forbidden} />
        <Route path="/error" component={UnhandledError} />
        <Route path="/not-found" component={NotFound} />
        <Route component={NotFound} />
      </Switch>

    </div>
  </Router>
);