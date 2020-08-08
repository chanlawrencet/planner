// import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/Planner.js</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }
//
// export default App;

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
