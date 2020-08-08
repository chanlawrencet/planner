import React from 'react';
import './App.css';
import Week from "./components/Week";
import moment from "moment";
import {monthParser} from "./components/helpers";

class Planner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currWeek: new moment().startOf('week'),
      currStart: new moment().startOf('week'),
    }
  }

  incrementStart() {
    console.log('inc')
    const {currStart} = this.state;
    this.setState({
      currStart: currStart.add(1, 'week'),
    })
  }

  decrementStart() {
    console.log('dec')
    const {currStart} = this.state;
    this.setState({
      currStart: currStart.subtract(1, 'week'),
    })
  }

  toToday() {
    this.setState({
      currStart: new moment().startOf('week'),
    })
  }

  render() {
    console.log(this.state)
    const {currStart} = this.state;

    const monthString = monthParser(currStart.month());
    return (
      <div
        style={{
          margin: 20,
          height: '90vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            marginBottom: 10,
          }}
        >
          <button
            onClick={() => this.toToday()}
          >
            today
          </button>
          <button
            onClick={() => this.decrementStart()}
          >
            back
          </button>
          <button
            onClick={() => this.incrementStart()}
          >
            forward
          </button>
          <div
            style={{
              marginLeft: 20
            }}
          >
            {monthString[0].toUpperCase() + monthString.substring(1) + ' ' + currStart.year()}
          </div>
        </div>
        <Week
          newStart={new moment(currStart)}
        />
      </div>
    );
  }
}

export default Planner;
