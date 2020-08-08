import React from "react";
import {dayParser} from "./helpers";

class Day extends React.Component {


  render() {
    const {currDay} = this.props;
    return (
      <div
        style={{
          borderStyle: 'solid',
          flexGrow: 1,
          height: '100%',
      }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div>
            {dayParser(currDay.weekday()).toUpperCase()}
          </div>
          <div>
            {currDay.date()}
          </div>
        </div>
      </div>
    )
  }
}

export default Day;