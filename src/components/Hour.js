import React from "react";

class Hour extends React.Component {
  render() {
    const {currHour, clicked, hourKey, handleSelect} = this.props;
    return (
      <div
        style={{
          width: '100%',
          // height: '100%',
          height: '4.166%',
          borderStyle: 'solid',
          margin: '-3px 0 0 -3px',
          backgroundColor: clicked ? 'green': 'pink' ,
          userSelect: 'none'
        }}
        onMouseDown={(e) =>{
          if (e.buttons === 1) {
            handleSelect(currHour)
          }
        }}
        onMouseEnter={(e) =>{
          if (e.buttons === 1) {
            handleSelect(currHour)
          }
        }}
      >
        {/*{currHour.toString()}*/}
      </div>
    );
  }
}

export default Hour;