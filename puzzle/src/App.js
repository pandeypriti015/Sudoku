import React, { Component } from 'react';
import './App.css';
class Box extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        count :1,
        color: '#ccc',
        disabled: false
      };
  }
  checkAnswer(useranswer){
    if(this.props.answer == useranswer)
    {
      this.setState(
        {
          color:'#ccc',
          disabled:true
        }
      )
    }
   else if(this.props.answer !== useranswer && useranswer!=''){
     this.props.wrongCount();
      if(this.state.count == 1)
      {
        this.setState(
          {
            color:'yellow',
            count:2
          }
        )
      }
      else if(this.state.count == 2)
      {
        this.setState(
          {
            color:'orange',
            count:3
          }
        )
      }
      else if(this.state.count == 3)
      {
        this.setState(
          {
            color:'red',
            count:4,
            disabled :true
          }
        )
      }
    }
      }
  render(){
      return (
        <div className='grid-box'>
          {this.props.number ? (
            <div className='Box' > {this.props.number}</div>
          ) : (
                  <input type='text' value={this.state.value} style={{backgroundColor:this.state.color}}
                  onChange={(event)=> this.checkAnswer(event.target.value)}  disabled={(this.state.disabled)? 'disabled':''} maxLength={1} />
                )
          }
        </div>
      )
    }
}
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      incorrectAttempts:0
    }
    this.increment=this.increment.bind(this);
  }
    increment(){
      this.setState({
        incorrectAttempts:this.state.incorrectAttempts +1
      })
    }      

    
  render() {
    return (
      <div className="grid">
        <div className="grid-line">
          <div className="Box-row">
            <Box number={3} />
            <Box answer={1} wrongCount= {this.increment}/>
            <Box answer={4} wrongCount= {this.increment}/>
            <Box number={2} />
          </div>
          <div className="Box-row">
            <Box answer={2} wrongCount= {this.increment} />
            <Box number={4} />
            <Box number={1} />
            <Box answer={3} wrongCount= {this.increment} />
          </div>
          <div className="Box-row">
            <Box answer={1} wrongCount= {this.increment}/>
            <Box number={3} />
            <Box number={2} />
            <Box answer={4} wrongCount= {this.increment}/>
          </div>
          <div className="Box-row">
            <Box number={4} />
            <Box answer={2} wrongCount= {this.increment}/>
            <Box answer={3} wrongCount= {this.increment}/>
            <Box number={1} />
          </div>
        </div>
        <h2>Wrong Attempts = {this.state.incorrectAttempts}</h2>
      
      </div>
    );
  }
}
export default App;

