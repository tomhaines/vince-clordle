import React from 'react';
import Header from './header.js';
import IntroModal from './intro_modal.js';
import Alert from './alert.js';
import Board from './board.js';
import Keyboard from './keyboard.js';

class Game extends React.Component {
  
    constructor(props) {
      super(props);
      
      if ( this.props.answer !== window.localStorage.getItem('answer')) {
        window.localStorage.setItem('answer', this.props.answer);
        window.localStorage.removeItem('state');
      }
      
      this.state = JSON.parse(window.localStorage.getItem('state')) || {
        gameComplete: false,
        alerts: [],
        currentAttempt: 0,
        nextLetterIndex: 0,
        lastAttemptRejected: false,
        attempts: Array(this.props.numberOfAttempts).fill().map(() => Array(this.props.answer.length).fill("")),
        acceptedLetters: {}, // a hash of letters accepted, and whether they were present, absent, or correct
        introModalVisible: true,
      }
      this.displayModal = this.displayModal.bind(this);
      this.addAlert = this.addAlert.bind(this);
      this.deleteAlert = this.deleteAlert.bind(this);
      this.submitLetter = this.submitLetter.bind(this);
      this.submitAttempt = this.submitAttempt.bind(this);
      this.updateAcceptedLetters = this.updateAcceptedLetters.bind(this);
    }
    
    setState(state) {
      super.setState(state);
      setInterval(() => {
        window.localStorage.setItem('state', JSON.stringify(this.state));
      },500);
    }
    
    updateAcceptedLetters(attempt) {
      let acceptedLetters = Object.assign({}, this.state.acceptedLetters);
      [...attempt.join("")].forEach((letter,index) => {
        if (this.props.answer[index] === letter) {
          acceptedLetters[letter] = "correct";
        } else if (this.props.answer.includes(letter) && !(acceptedLetters[letter] === 'correct')) {
          // if the letter is present, but not in the right order, also don't overwrite previous correct status
          acceptedLetters[letter] = "present";
        } else if (!this.props.answer.includes(letter)) {
          acceptedLetters[letter] = 'absent';
        }
      });
      this.setState({acceptedLetters: acceptedLetters});
    }
    
    addAlert(text) {
      const alert = {
        text: text,
        time: Date.now()
      }
      let alerts = this.state.alerts.slice()
      alerts.unshift(alert);
      this.setState({alerts:alerts});
      setTimeout(() => {
        this.deleteAlert(alert.time);
      }, this.props.alertNotificationTime)
    }
  
    displayModal(visible) {
      this.setState({introModalVisible: visible})
    }
    
    deleteAlert(time) {
      const alerts = this.state.alerts.filter((alert) => alert.time !== time);
      this.setState({alerts:alerts});
    }

    setRefreshTimer() {
      var d = new Date();
      var h = d.getHours();
      var m = d.getMinutes();
      var s = d.getSeconds();
      var secondsUntilEndOfDate = (24*60*60) - (h*60*60) - (m*60) - s;
      setTimeout(() => {
        window.location.reload();
      }, secondsUntilEndOfDate * 1000)
    }
    
    submitAttempt() {
      if ( !this.state.gameComplete ) {
        const attempt = this.state.attempts[this.state.currentAttempt]
  
        let accepted = false;
        let alertText = "";
        let correct = false
  
        if ( attempt.join("") === this.props.answer ) { // you won!
          alertText = this.props.game_text['win_phrases'][this.state.currentAttempt];
          correct = true;
          accepted = true;
        } else if ( attempt.filter((letter) => letter !== "").length !== this.props.answer.length ) {
          alertText = this.props.game_text['alerts']['not_enough_letters'];
        } else if ( !this.props.wordList.includes(attempt.join("")) ) {
          alertText = this.props.game_text['alerts']['not_in_word_list'];
        } else {
          accepted = true;
        }
        
        if ( accepted ) {
          this.updateAcceptedLetters(attempt);
          const nextAttempt = this.state.currentAttempt + 1
          this.setState({currentAttempt: nextAttempt, nextLetterIndex: 0, lastAttemptRejected: false});
          if ( nextAttempt >= this.props.numberOfAttempts || correct) {
            this.setState({gameComplete: true});
            this.setRefreshTimer();
          }
        } else {
          this.setState({lastAttemptRejected: true});
        }
        
        if ( alertText !== "") {
          this.addAlert(alertText)
        }
        
      }
    }
  
    submitLetter(i) {
      if ( !this.state.gameComplete ) {
        const attempts = this.state.attempts.slice();
        switch(i) {
          case this.props.submitText :
            this.submitAttempt();
            break;
  
          case this.props.backspaceText :
            if ( this.state.nextLetterIndex > 0 ) {
              attempts[this.state.currentAttempt][this.state.nextLetterIndex - 1 ] = ""
              this.setState({attempts: attempts, nextLetterIndex: this.state.nextLetterIndex - 1, lastAttemptRejected: false});
            }
            break;
  
          default :
            if ( this.state.nextLetterIndex < this.props.answer.length) {
              attempts[this.state.currentAttempt][this.state.nextLetterIndex ] = i
              this.setState({attempts: attempts, nextLetterIndex: this.state.nextLetterIndex + 1, lastAttemptRejected: false});
            }
            break;
        }
      }
    }
    
    getAcceptedAttempts() {
      return( this.state.attempts.filter((attempt, index) => index < this.state.currentAttempt).map((attempt) => attempt.join("")).filter((text) => text.length > 0))
    }
    
    render() {
      return (
              
        <div className="game-container" style={{"--wordLength": this.props.answer.length}}>
          <Header helpOnClick={() => this.displayModal(true)} />
          <IntroModal visible={this.state.introModalVisible} closeModal={() => this.displayModal(false)}/>  
          <div className="game">
            <div className="board-container">
              <Board
                answer={this.props.answer}
                attempts={this.state.attempts}
                currentAttempt={this.state.currentAttempt}
                lastAttemptRejected={this.state.lastAttemptRejected}
              />
            </div>
            <div className="keyboard">
              <Keyboard
                answer={this.props.answer}
                acceptedAttempts={this.getAcceptedAttempts()}
                acceptedLetters={this.state.acceptedLetters}
                submitLetter={this.submitLetter}
                submitText={this.props.submitText}
                backspaceText={this.props.backspaceText}
                keyboardLayout={this.props.keyboardLayout}
              />
            </div>
            <Alert 
              alerts={this.state.alerts}
              gameComplete={this.state.gameComplete}
              notificationTime={this.props.alertNotificationTime}
            />
          </div>
        </div>
      );
    }
  }

export default Game;