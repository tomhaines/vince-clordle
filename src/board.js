import React from 'react';
import Row from "./row";

class Board extends React.Component {
    render() {
      return (
        <div className="board-game">
          {this.props.attempts.map((attempt, index) => {
            return (
                <Row
                  key={index}
                  attempt={attempt}
                  accepted={this.props.currentAttempt > index}
                  rejected={this.props.currentAttempt === index && this.props.lastAttemptRejected}
                  answer={this.props.answer}
                />
            )
          })}
        </div>
      );
    }
  }

export default Board;