import React from 'react';
import ReactMarkdown from 'react-markdown';

export default (props) => {

  return (
    <div className="bounds course--detail" key={props.id}>
      <div className="grid-66">
        <div className="course--header">
          <h4 className="course--label">Course</h4>
          <h3 className="course--title">{props.title}</h3>
          <p>{`By ${props.firstName} ${props.lastName}`}</p>
        </div>
        <div className="course--description">
            <ReactMarkdown 
              source={props.description}
              escapeHtml={false}
            />
        </div>
      </div>
      <div className="grid-25 grid-right">
        <div className="course--stats">
          <ul className="course--stats--list">
            <li className="course--stats--list--item">
            {/* Not Required */}
              <h4>Estimated Time</h4>
              {
                props.estimatedTime ?
                  <h3>{ props.estimatedTime }</h3>
                  :
                  <h3></h3>
              }
            </li>
            <li className="course--stats--list--item">
            {/* Not Required */}
              <h4>Materials Needed</h4>
              {
                props.materialsNeeded ?
                  <ul>
                    <ReactMarkdown 
                      source={props.materialsNeeded}
                      escapeHtml={false}
                    />
                  </ul>
                  :
                  <ul></ul>
              }
            </li>
          </ul>
        </div>
      </div>
    </div>    
  );
}
