import React, { Component } from 'react';
import AppPerson from './person/AppPerson';

class App extends Component {
  state = {
    persons: [
      {
        id: '1',
        name: 'Roman Reigns',
        age: 32,
        finishingMove: 'SuperMan Punch',
      },
      {
        id: '2',
        name: 'Dean Ambrose',
        age: 32,
        finishingMove: 'Dirty Deeds',
      },
      {
        id: '3',
        name: 'Seth Rollins',
        age: 31,
        finishingMove: 'Curb Stomp',
      },
    ],
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [ ...this.state.persons ];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    
    this.setState({
      persons: persons,
    })
  };

  togglePersonHandler = () => {
    const showHideToggle = this.state.showPersons;
    
    this.setState({
      showPersons: !showHideToggle,
    });
  };

  render() {
    let personsDOM = null;
    if (this.state.showPersons) {
      personsDOM = (
        <div className="app-PersonsList">
          {
            this.state.persons.map((person, index) => {
              return (
                <AppPerson 
                  name={ person.name }
                  destroy={ () => this.deletePersonHandler(index) }
                  age={ person.age }
                  key={ person.id }
                  changed={ (event) => this.nameChangedHandler(event, person.id) }>
                  { person.finishingMove }
                </AppPerson>
              );
            })
          }
        </div>
      );
    }

    return (
      <div className="app">
        <h1>This is S.H.I.E.L.D!!!</h1>
        <p>Yes Yes! Sierra Hotel <strong>India</strong> Echo Lima Delta</p>
        <button className="button radius bordered shadow primary"
          onClick={ this.togglePersonHandler }>
          Toggle Wrestlers
        </button>
        { personsDOM }
      </div>
    );
  }
}

export default App;
