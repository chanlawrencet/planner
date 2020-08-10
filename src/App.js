import React from "react";
import Planner from "./Planner";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        events: []
      }
    }
  }

  handleSubmit({name, location, selected}) {
    const {data} = this.state;
    const newEvents = data.events.push({name, location, selected})

    this.setState({
      data: {
        events: newEvents,
      }
    })
  }

  render() {
    const {data} = this.state;
    return(
      <div>
        <Planner
          data={data}
          handleSubmit={(e) => console.log(e)}
        />
      </div>
    )
  }
}