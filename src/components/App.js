import React, { Component } from 'react';
import AppPerson from './person/AppPerson';

class App extends Component {
  state = {
    persons: [
      {
        name: 'Roman Reigns',
        age: 32,
        finishingMove: 'SuperMan Punch',
      },
      {
        name: 'Dean Ambrose',
        age: 32,
        finishingMove: 'Dirty Deeds',
      },
      {
        name: 'Seth Rollins',
        age: 31,
        finishingMove: 'Curb Stomp',
      },
    ],
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        {
          name: 'Shawn Michaels',
          age: 52,
          finishingMove: 'Sweet Chin Music',
        },
        {
          name: 'XPac',
          age: 45,
          finishingMove: 'X-Factor',
        },
        {
          name: 'Triple H',
          age: 48,
          finishingMove: 'Pedigree',
        },
      ],
    });
  }

  render() {
    return (
      <div className="app">
        <h1>This is S.H.I.E.L.D!!!</h1>
        <p>But if you click the button below, it becomes <strong>DX</strong></p>
        <button 
          className="button radius bordered shadow primary"
          onClick={this.switchNameHandler}>
          Switch Wrestlers
        </button>
        <AppPerson name={this.state.persons[0].name} age={this.state.persons[0].age}>
          {this.state.persons[0].finishingMove}
        </AppPerson>
        <AppPerson name={this.state.persons[1].name} age={this.state.persons[1].age}>
          {this.state.persons[1].finishingMove}
        </AppPerson>
        <AppPerson name={this.state.persons[2].name} age={this.state.persons[2].age}>
          {this.state.persons[2].finishingMove}
        </AppPerson>
      </div>
    );
  }
}

export default App;
