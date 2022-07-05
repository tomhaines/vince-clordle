import React from 'react';
import Tile from "./tile";

class Row extends React.Component {
    constructor(props) {
      super(props);
      this.getLetterStatus = this.getLetterStatus.bind(this);
    }
    getLetterStatus(letter, index) {
      let status = ""
      if (!this.props.accepted) {
        status = ( letter !== "" ? "tbd" : "empty" );
      } else if ( letter === this.props.answer[index]) {
        status = "correct";
      } else if (this.props.answer.includes(letter)) {
        status = "present";
      } else {
        status = "absent";
      }
  
      return status
    }
    render() {
      return (
        <div className={"game-row" + (this.props.rejected ? " rejected" : "")} style={{"--display-happy-tile": (this.props.answer === this.props.attempt.join("") ? 1 : 0)}}>
          {this.props.attempt.map((letter, index) => {
            this.status = this.getLetterStatus(letter,index)
            return (
              <Tile
                key={index}
                index={index}
                value={letter}
                accepted={this.props.accepted}
                status={this.status}
              />
            )
          })}
        </div>
      )
    }
  }

export default Row;