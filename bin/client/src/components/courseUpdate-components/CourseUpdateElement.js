import React from 'react';
import Form from '../Form';

export default (props) => {

  return (
    <div className="bounds course--detail">
      <h1>Update Course</h1>
      <div>
        <Form
        errors={props.errors}
        cancel={props.cancel}
        submit={props.submit}
        submitButtonText="Update Course"
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
                    value={props.title}
                    onChange={props.handleChange}
                  />
                </div>
                <p>{`By ${props.firstName} ${props.lastName}`}</p>
              </div>
              <div className="course--description">
                <div>
                <textarea 
                  id="description" 
                  name="description" 
                  className="" 
                  value={props.description}
                  onChange={props.handleChange}
                >
                </textarea>
                  {/* <ReactMarkdown
                    id="description"
                    name="description"
                    className=""
                    source={props.description}
                    onChange={props.handleChange}
                    escapeHtml={false}
                  /> */}
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
                        value={(props.estimatedTime === null) ? "" : props.estimatedTime}
                        onChange={props.handleChange}
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
                      value={(props.materialsNeeded === null) ? "" : props.materialsNeeded}
                      onChange={props.handleChange}
                    >
                    </textarea>
                      {/* <ReactMarkdown
                        id="materialsNeeded" 
                        name="materialsNeeded" 
                        className=""                         
                        source={props.materialsNeeded}
                        onChange={props.materialsNeeded}
                        escapeHtml={false}
                      /> */}
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
