import React from "react";
import moment from "moment";
import Day from "./Day";

class Week extends React.Component {

  constructor(props) {
    super(props);
    const {newStart} = this.props;
    this.state = {
      days: this.makeDays(newStart)
    }
  }

  updateWeek(newStart) {
    this.setState({
      days: this.makeDays(newStart)
    })
  }

  makeDays(newStart) {
    const newStartCopy = new moment(newStart)
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(new moment(newStartCopy));
      newStartCopy.add(1, 'day')
    }
    return days;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.newStart !== this.props.newStart) {
      this.updateWeek(this.props.newStart);
    }
  }

  render() {
    const {days} = this.state;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          height: '90%'
        }}
      >
        {days.map(currDay => {return (<Day key={currDay.toString()} currDay={currDay}/>)})}
      </div>
    );
  }
}

export default Week;