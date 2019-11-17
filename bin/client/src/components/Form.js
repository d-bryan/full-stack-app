import React from 'react';

// Create the Form template for later user in other components
export default (props) => {
  const {
    cancel,
    errors,
    submit,
    submitButtonText,
    elements,
  } = props;

  // pass the submit on to props
  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  // pass the cancel on to props
  function handleCancel(event) {
    event.preventDefault();
    cancel();
  }

  return (
    <div>
      <ErrorsDisplay errors={errors} />
      <form onSubmit={handleSubmit}>
        {elements()}
        <div className="grid-100 pad-bottom">
          <button className="button" type="submit">{submitButtonText}</button>
          <button className="button button-secondary" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

// Displays the Errors to the user that are sent back from the API
function ErrorsDisplay({ errors }) {
  let errorsDisplay = null;

  if (errors.length) {
    errorsDisplay = (
      <div>
        <h2 className="validation--errors--label">Validation errors</h2>
        <div className="validation-errors">
          <ul>
            {errors.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
        </div>
      </div>
    );
  }

  return errorsDisplay;
}
