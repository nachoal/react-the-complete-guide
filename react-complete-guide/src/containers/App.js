import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Ignacio", age: 27},
      { id: '2', name: "Andrea", age: 28},
      { id: '3', name: "Ilse", age: 22}
    ],
    showPersons: false
  }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler =  (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    } );

    const person =  {
     ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {persons: persons} );
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  // NEW WAY OF DOING STATE CHANGES WITH REACT HOOKS
  // The render method is used when creating a Component by extending the component object
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} /> 
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'lightred',
        color: 'black'
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red]
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
      <StyleRoot>
        <div className="App">
        <h1>Hi, I'm a React </h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
        style={style} 
        onClick={this.togglePersonsHandler}>Toogle persons</button>
        {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
