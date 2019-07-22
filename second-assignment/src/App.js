import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
class App extends Component {
  state = {
    paragraphValue: "",
    letter: "",
    letters: []
  }


  outputLengthHandler = (event) => {
    this.setState({paragraphValue: event.target.value.length})
    this.setState({letter: event.target.value})
    this.setState({letters: event.target.value.split('')})

  }

  deleteCharHandler = (charIndex) => {
    const letters = [...this.state.letters];
    letters.splice(charIndex, 1);
    this.setState({letters: letters})
  }
  render() {
    
    let paragraph = (
      <p>Input value length: {this.state.paragraphValue}</p>
    );
    
    let stringChars = this.state.letters;
    let characters = (
      <div>
        {stringChars.map((chara, index) => {
          return <CharComponent 
            click={() => this.deleteCharHandler(index)}
            character={chara} 
            key={index} />
        })}
      </div>
    );
    
    return (
      <div className="App">
        <h1>Second assignment</h1>

        <input type="text" onChange={(event) => this.outputLengthHandler(event)}/>
        <ValidationComponent textLength={this.state.paragraphValue} />
       {paragraph}
       {characters}
        <ol>
          {/* <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a pragraph).</li> */}
          {/* <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li> */}
          {/* <li>Inside the ValidationComponent either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li> */}
          {/* <li>Create anoter component (=> CharComponent) and style it as an inline box (=> display: inline-block; padding: 16px, text-align: center, margin 16px, border: 1px solid black).</li> */}
          {/* <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li> */}
          <li>When you click a CharComponent it should be removed from the entered text.</li>
          
          Hint: Keep in mind that Javascrit strings are basically arrays!
        </ol>
      </div>
    );
  }
}

export default App;
