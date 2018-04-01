import React from 'react';
import modifierClasses from './__modifierClasses.scss';

const AppPerson = (props) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  if (randomNumber >= 5) {
    this.randomModifierClass = modifierClasses.isCalloutSecondary;
  } else {
    this.randomModifierClass = modifierClasses.isCalloutLight;
  }

  return (
    <div className={ `app-Person callout ${this.randomModifierClass}` }>
      <button className="close-button" aria-label="Dismiss alert" type="button">
        <span aria-hidden="true"
          onClick={ props.destroy }>&times;</span>
      </button>
      <div className="app-Person_Content">
        <p>Random Number: { randomNumber }</p>
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
