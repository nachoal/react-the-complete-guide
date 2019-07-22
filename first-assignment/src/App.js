import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
// Pass the event-handler method reference to the UserInput component and bind it to the input-change event
class App extends Component {
  state = {
    username: 'Naval'
  }

  updateUsernameHandler = (event) => {
    console.log("event handler was triggered!");
    console.log(this.state);
    this.setState({
      username: event.target.value
    })
  }
  render() {
    const style = {
      backgroundColor: 'red',
      font: 'inherit',
    }
    return (
      <div className="App">
        <h1>React first assignment</h1>
        <UserInput changed={this.updateUsernameHandler} username={this.state.username} />
        <UserOutput
          style={style} 
          username={this.state.username}
          firstParagraph={'Wealth is Businesses and assets that earn while you sleep'}
          secondParagraph={'Your caracter becomes your destiny'}  
        />

        <UserOutput
          username={this.state.username}
          firstParagraph={'You build your caracter in a certain way:'}
          secondParagraph={'Your caracter becomes your destiny'}  
        />

        <UserOutput
          username={this.state.username}
          firstParagraph={'You must own equity to own your financial freedoms'}
          secondParagraph={'Bussinesses with a brand.'}  
        />


        <UserOutput 
          username={this.state.username}
          firstParagraph={'The first point is how you are not going to get rich'}
          secondParagraph={'You will not get rich renting out your time'}  
        />








        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li> ✅
          <li>UserInput should hold an input element, UserOutput two paragraphs</li> ✅
          <li>Output multiple UserOutput components in the App component (any paragraphs texts of your choice)✅</li>
          <li>Pass a username to UserOutput via props and display it there✅</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component ✅</li>
          <li>Add a method to manipulate the state (=> an event-handler method) ✅</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event ✅</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput ✅</li>
          <li>Add to-way binding to your input (in UserInput) to also display the starting username ✅</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets ✅</li>
        </ol>
      </div>
    );
  }
}

export default App;
