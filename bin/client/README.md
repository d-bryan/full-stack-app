# React Client

[TOC]

## Setup 

### `Node JS` is required to run this project

If you do not have it installed then you can install it [here](https://nodejs.org/en/)

If you are not testing new features it is recommended that you download the `stable` version (Which is 12.13.0) at this time.

### Install Dependencies with `npm install`

Before proceeding ensure that you have setup the `API` section of this project as it makes calls to an API also. 

Find the instructions to setting up the API [here](./api/README.md)

## Usage

This is the front end application that displays Courses in the `sqlite` database that Users have created while allowing them to `Create`, `Read`, `Update` and `Delete` this information.

### Higher Order Components

The Calls the API are made in the `Data.js` file whie being provided to the App through the `Context.js` file.

### Components

The Application has the followings components displayed to the user when interacting with it:

  - Courses
  - CourseDetails
  - UpdateCourse
  - CreateCourse

There are also `PrivateRoutes` for pieces that can only be viewed for when a user has been authorized.

## Available Scripts

In the project directory, you can run:

### `yarn start` || `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test` || `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` || `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject` || `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
