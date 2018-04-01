import React from 'react';
import scopedClasses from './__scopedClasses.css';

const AppPerson = (props) => {
  return (
    <div className={ `app-Person callout ${scopedClasses.Person}` }>
      <button className="close-button" aria-label="Dismiss alert" type="button">
        <span aria-hidden="true"
          onClick={ props.destroy }>&times;</span>
      </button>
      <div className="app-Person_Content">
        <p>I am { props.name } and I am { props.age } years old.</p>
        <p>My Finishing Move is: { props.children }</p>
        <input type="text" placeholder="Enter New Name"
          onChange={ props.changed }
          value={ props.name } />
      </div>
    </div>
  );
};

export default AppPerson;
