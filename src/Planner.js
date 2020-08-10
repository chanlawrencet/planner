import React from 'react';
import './App.css';
import Week from "./components/Week";
import moment from "moment";
import {monthParser} from "./components/helpers";
import Sidebar from "./components/Sidebar";

class Planner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currWeek: new moment().startOf('week'),
      currStart: new moment().startOf('week'),
      showPicker: false,
      data: this.props.data,
      selected: new Set(),
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

  showPicker(selected) {
    this.setState({
      showPicker: true,
      selected,
    });
  }

  togglePicker() {
    this.setState({
      showPicker: !this.state.showPicker,
    })
  }

  render() {
    console.log(this.state);
    const {currStart, showPicker, data, selected, selectedDayOfWeek} = this.state;
    const {handleSubmit} = this.props;
    const monthString = monthParser(currStart.month());
    return (
      <div
        style={{
          margin: 20,
          height: '90vh',
          position: 'relative',
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

          <button
            onClick={() => this.togglePicker()}
          >
            picker
          </button>
          <div
            style={{
              marginLeft: 20
            }}
          >
            {monthString[0].toUpperCase() + monthString.substring(1) + ' ' + currStart.year()}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            height: '100%'
          }}
        >
          <Sidebar
            currStart={currStart}
            selected={selected}
            showPicker={showPicker}
            handleSubmit={handleSubmit}
          />
          <Week
            newStart={new moment(currStart)}
            data={data}
            selectedDayOfWeek={selectedDayOfWeek}
            showPicker={this.showPicker.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Planner;
