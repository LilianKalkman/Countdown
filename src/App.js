import React, { Component } from 'react';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  state = {
    date: '3 November, 2017',
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
        <Form inline className="input">
          <FormControl
            id="inp"
            type="text"
            placeholder="New Date"
            onChange={(event) => this.setState({newDate: event.target.value})}
            />
          <Button onClick={() => this.updateDate()}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;


// clear input na Submit
// submit button weg, en zorgen dat op enter klikken werkt
