import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Box extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        {this.props.number ?(
          <div>{this.props.number}</div>
        ):(
          <input type = "text"/>
        )}
      </div>
    );
  }
}

class App extends Component
{
  render() {
    return (
      <div className="App">
        <Box number={3}/>
        <Box answer={1}/>
        <Box answer={1}/>
        <Box number={3}/>
      </div>
    );
  }
}
export default App;
