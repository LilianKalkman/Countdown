import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  componentWillMount(){
    this.calculateTime(this.props.date);
  }

  componentDidMount(){
    setInterval(() => this.calculateTime(this.props.date), 1000);
  }

  calculateTime = (enddate) => {
    const t = Date.parse(enddate) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds});
  }

  render(){
    return (
      <div className="clock">
        <div className="days">{this.state.days} days</div>
        <div className="hours">{this.state.hours} hours</div>
        <div className="minutes">{this.state.minutes} minutes</div>
        <div className="seconds">{this.state.seconds} seconds</div>
      </div>
    );
  }
}

export default Clock;
