import React from "react";
import {dayParser} from "./helpers";
import moment from "moment";
import Hour from "./Hour";

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: this.makeHours(this.props.currDay)
    }
  }

  updateDay(currDay) {
    this.setState({
      hours: this.makeHours(currDay)
    })
  }

  makeHours(currDay) {
    const newDayCopy = new moment(currDay)
    const hours = [];
    for (let i = 0; i < 24; i++) {
      hours.push(new moment(newDayCopy));
      newDayCopy.add(1, 'hour')
    }
    return hours;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.currDay !== this.props.currDay) {
      this.updateDay(this.props.currDay);
    }
  }

  handleSelect(hourSelected) {
    const {select, selected} = this.props;
    const hourBefore = new moment(hourSelected).add(1, 'hour');
    const hourAfter = new moment(hourSelected).subtract(1, 'hour');
    if (
      selected.has(hourBefore.toString()) ||
      selected.has(hourAfter.toString()) ||
      selected.size === 0
    ) {
      select(hourSelected);
    }
  }

  render() {
    const {currDay, selected, showPicker} = this.props;
    const {hours} = this.state;

    const isToday = new moment().format('YYYY MM DD') === currDay.format('YYYY MM DD');
    return (
      <div
        style={{
          flexGrow: 1,
          height: '100%',
      }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 10,
            userSelect: 'none',
            color: isToday ? 'blue' : 'black'
          }}
        >
          <div>
            {dayParser(currDay.weekday()).toUpperCase()}
          </div>
          <div>
            {currDay.date()}
          </div>
        </div>
        <div
          style={{
            flexGrow: 1,
            height: '100%',
          }}
          onMouseUp={() => {
            console.log('mouse up')
            showPicker(selected);
          }}
          >
          {hours.map( hour =>
            <Hour
              key={hour.hours()}
              clicked={selected.has(hour.toString())}
              currHour={hour}
              handleSelect={this.handleSelect.bind(this)}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Day;