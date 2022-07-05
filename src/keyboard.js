import React from 'react';

class Keyboard extends React.Component {
    constructor(props) {
      super(props);
      document.addEventListener("keypress", (event) => {
        const key = event.key.toUpperCase();
        if (this.props.keyboardLayout.flat().includes(key) && key !== this.props.submitText.toUpperCase() && key !== this.props.backspaceText.toUpperCase()) {
          this.props.submitLetter(key);
        }
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Backspace") {
          this.props.submitLetter(this.props.backspaceText);
        } else if (event.key === "Enter") {
          this.props.submitLetter(this.props.submitText)
        }
      })
    }
    handleClick(i) {
      this.props.submitLetter(i);
    }
    renderKey(i) {
      return (
        <Key
          key={i}
          value={i}
          onClick={() => this.handleClick(i)}
          status={this.props.acceptedLetters[i]}
        />
      );
    }
    render() {
      return (
        <div>
          {this.props.keyboardLayout.map((value, index) => {
            return (
              <div key={index} className="keyboardRow">
                {value.map((key, index) => { return this.renderKey(key) })}
              </div>
            )
          })}
        </div>
      );
    }
}
  
function Key(props) {
    return(
        <button className={"key " + props.status} onClick={props.onClick}>
        {props.value}
        </button>
    )
}

export default Keyboard;