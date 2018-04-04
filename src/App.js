import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
  state = {
    date: '3 November 2017',
    newDate: ''
  }

  updateDate = () => {
    this.setState({date: this.state.newDate});
  }

  render(){
    return(
      <div className="App">
        <div className="title">Countdown to {this.state.date}</div>
        <Clock date={this.state.date}/>
        <div className="input">
          <input
            type="text"
            placeholder="Type your Date"
            onChange={(event) => this.setState({newDate: event.target.value})}
            />
          <span><button onClick={() => this.updateDate()}>Submit</button></span>
        </div>
      </div>
    );
  }
}

export default App;
