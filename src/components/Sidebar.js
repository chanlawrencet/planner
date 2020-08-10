import React from "react";
import moment from "moment";
import NewEvent from "./NewEvent";

class Sidebar extends React.Component {


  render() {
    const {currStart, showPicker, selected, handleSubmit} = this.props;
    // const weekday = toWeekday(selected.values().next().value)
    return (
      <div
        style={{
          width: 200,
          height: 300,
          marginTop: 40,
          marginRight: 20,
        }}
      >
        {!showPicker ? <div>
          Select a time to add an event
        </div> :
        <NewEvent
          handleSubmit={handleSubmit}
          selected={selected}
        />
        }

      </div>
    );
  }
}

export default Sidebar;