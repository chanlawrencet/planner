import React from "react";
import {dayParser} from "./helpers";
import moment from "moment";
import Hour from "./Hour";

class Day extends React.Component {
  constructor(props) {
    super(props);
    const {currDay} = this.props;
    this.state = {
      hours: this.makeHours(currDay)
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

  render() {
    const {currDay} = this.props;
    const {hours} = this.state;
    return (
      <div
        style={{
          // borderStyle: 'solid',
          flexGrow: 1,
          height: '100%',
          // margin: '-3px 0 0 -3px'
      }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 10,
            userSelect: 'none'
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
          >
          {hours.map(currHour => <Hour key={currHour.toString()} currHour={currHour}/>)}
        </div>
      </div>
    )
  }
}

export default Day;