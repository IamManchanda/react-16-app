import React from 'react';

const AppPerson = (props) => {
  console.log(props);
  return (
    <div className="app-Person">
      <p className="app-Person_NameAge">
        I am { props.name } and I am { props.age } years old.
      </p>
      <p className="app-Person_FinishingMove">
        My Finishing Move is: { props.children }
      </p>
    </div>
  );
};

export default AppPerson;
