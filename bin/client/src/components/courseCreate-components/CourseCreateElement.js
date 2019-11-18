import React from 'react';
import Form from '../Form';

// Anonymous component that Create Course uses to submit new courses
export default (props) => {
  return (
    <div className="bounds course--detail">
      <h1>Create Course</h1>
      <div>
        <Form 
        errors={props.errors}
        cancel={props.cancel}
        submit={props.submit}
        submitButtonText="Create Course"
        elements={()=>(
          <React.Fragment>
            <div className="grid-66">
              <div className="course--header">
                <h4 className="course--label">Course</h4>
                <div>
                  <input 
                    id="title" 
                    name="title" 
                    type="text" 
                    className="input-title course--title--input" 
                    placeholder="Course title..."
                    value={props.title}
                    onChange={props.change}
                  />
                </div>
              </div>
              <div className="course--description">
                <div>
                  <textarea 
                    id="description" 
                    name="description" 
                    className="" 
                    placeholder="Course description..."
                    value={props.description}
                    onChange={props.change}
                  >
                  </textarea>
                </div>
              </div>
            </div>
            <div className="grid-25 grid-right">
              <div className="course--stats">
                <ul className="course--stats--list">
                  <li className="course--stats--list--item">
                    <h4>Estimated Time</h4>
                    <div>
                      <input 
                        id="estimatedTime" 
                        name="estimatedTime" 
                        type="text" 
                        className="course--time--input"
                        placeholder="Hours"
                        value={props.estimatedTime}
                        onChange={props.change}
                      />
                    </div>
                  </li>
                  <li className="course--stats--list--item">
                    <h4>Materials Needed</h4>
                    <div>
                      <textarea 
                        id="materialsNeeded" 
                        name="materialsNeeded" 
                        className="" 
                        placeholder="List materials..."
                        value={props.materialsNeeded}
                        onChange={props.change}
                      >
                      </textarea>
                    </div>
                  </li>
                </ul>
              </div>
            </div>            
          </React.Fragment>
        )}
        />
      </div>
    </div>
  );
}