import React from 'react';
import './App.css';
import Week from "./components/Week";
import moment from "moment";
import {monthParser} from "./components/helpers";
import Picker from "./components/Picker";

class Planner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currWeek: new moment().startOf('week'),
      currStart: new moment().startOf('week'),
      showPicker: false,
      data: this.props.data,
      selected: new Set(),
      selectedDayOfWeek: null,
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

  showPicker() {
    this.setState({
      showPicker: true,
    });
  }

  togglePicker() {
    this.setState({
      showPicker: !this.state.showPicker,
    })
  }

  select(toSelect) {
    const {selected, selectedDayOfWeek} = this.state;
    selected.add(toSelect.toString());
    if (selectedDayOfWeek === null) {
      this.setState({
        selected,
        selectedDayOfWeek: toSelect.weekday(),
      })
    } else {
      this.setState({selected})
    }
  }

  deselect(toDeselect) {
    const {selected} = this.state;
    selected.delete(toDeselect.toString());
    this.setState({selected})
  }

  render() {
    console.log(this.state);
    const {currStart, showPicker, data, selected, selectedDayOfWeek} = this.state;

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
        <Week
          newStart={new moment(currStart)}
          data={data}
          select={this.select.bind(this)}
          deselect={this.deselect.bind(this)}
          selected={selected}
          selectedDayOfWeek={selectedDayOfWeek}
        />
        {showPicker && <Picker/>}
      </div>
    );
  }
}

export default Planner;
