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
import NotFound from './components/NotFound';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';
import UserSignOut from './components/UserSignOut';
import Authenticated from './components/Authenticated';
import withContext from './Context';
import PrivateRoute from './PrivateRoute';

// Add Context to Components
const HeaderWithContext = withContext(Header);
const AuthWithContext = withContext(Authenticated);
const UserSignUpWithContext = withContext(UserSignUp);
const UserSignInWithContext = withContext(UserSignIn);
const UserSignOutWithContext = withContext(UserSignOut);
const CoursesWithContext = withContext(Courses);
const CourseDetailWithContext = withContext(CourseDetail);


export default () => (
  <Router>
    <div>
      <HeaderWithContext />
      <hr/>

      <Switch>
        <Route exact path="/" render={() => <Redirect to="/courses" />} />
        
        

        
        {/* <PrivateRoute path="/authenticated" component={AuthWithContext} />
        <PrivateRoute path="/courses/create" component={CreateCourse} />
        <PrivateRoute path="/courses/create" component={UpdateCourse} /> */}
        <Route path="/signin" component={UserSignInWithContext} />
        <Route path="/signup" component={UserSignUpWithContext} />
        {/* <Route path="/signout" component={UserSignOutWithContext} /> */}
        <Route path="/courses/:id" component={CourseDetailWithContext} />
        <Route path="/courses" component={CoursesWithContext} />
        <Route component={NotFound} />
      </Switch>

    </div>
  </Router>
);



// function App() {


//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// };

// export default App;