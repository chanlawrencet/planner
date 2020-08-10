import React from "react";
import moment from "moment";
import Day from "./Day";

class Week extends React.Component {

  constructor(props) {
    super(props);
    const {newStart} = this.props;
    this.state = {
      days: this.makeDays(newStart),
      selected: new Set(),
      selectedDayOfWeek: null,
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.newStart !== this.props.newStart) {
      this.updateWeek(this.props.newStart);
    }
  }

  render() {
    const {days, selected, selectedDayOfWeek} = this.state;
    const {showPicker} = this.props;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          height: '90%',
          width: '100%'
        }}
      >
        {days.map(currDay => {

          if (selectedDayOfWeek !== null && selectedDayOfWeek !== currDay.weekday()){
            return (
              <Day
                key={currDay.toString()}
                currDay={currDay}
                select={() => {}}
                deselect={() => {}}
                selected={new Set()}
                showPicker={() => {}}
              />
            )
          }
          return (
          <Day
            key={currDay.toString()}
            currDay={currDay}
            select={this.select.bind(this)}
            deselect={this.deselect.bind(this)}
            selected={selected}
            showPicker={showPicker}
          />)
        })}
      </div>
    );
  }
}

export default Week;