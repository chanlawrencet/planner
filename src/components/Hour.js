import React from "react";

class Hour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    }
  }


  render() {
    const {currHour} = this.props;
    const {clicked} = this.state;
    return (
      <div
        style={{
          width: '100%',
          // height: '100%',
          height: '4.166%',
          borderStyle: 'solid',
          margin: '-3px 0 0 -3px',
          backgroundColor: clicked ? 'green': 'red' ,
          userSelect: 'none'
        }}
        onMouseDown={(e) =>{
          if (e.buttons === 1) {
            this.setState({
              clicked: !clicked,
            })
          }
        }}
        onMouseEnter={(e) =>{
          if (e.buttons === 1) {
            this.setState({
              clicked: !clicked,
            })
          }
        }}
      >
        {/*{currHour.toString()}*/}
      </div>
    );
  }
}

export default Hour;