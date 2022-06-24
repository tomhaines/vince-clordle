import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const keyboardLayout=[
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "←"]
 ]

const wordList=[  'ABOUT', 'ABOVE', 'ABUSE', 'ADMIT', 'AFTER', 'AGAIN', 'AGILE', 'AGREE', 'AHEAD', 'AIDES', 'AISLE', 'ALARM', 'ALERT', 'ALIVE', 'ALLOY', 'ALONE', 'ALONG', 'ALTAR', 'AMONG', 'ANDOR', 'ANGLE', 'ANGRY', 'ANKLE', 'APPLE', 'ARENT', 'ARGUE', 'ASHES', 'ASIDE', 'ASKED', 'ATTIC', 'AVERY', 'AVOID', 'AWFUL', 'BACKS', 'BADLY', 'BANGS', 'BASED', 'BASIS', 'BEAMS', 'BEARS', 'BEATS', 'BEEPS', 'BEGIN', 'BEING', 'BELLY', 'BELOW', 'BENCH', 'BENDS', 'BIBLE', 'BITES', 'BLACK', 'BLADE', 'BLAME', 'BLANK', 'BLAST', 'BLAZE', 'BLEAK', 'BLINK', 'BLOCK', 'BLOOD', 'BLOWN', 'BLOWS', 'BOARD', 'BOLTS', 'BONUS', 'BOOKS', 'BOOTH', 'BOXED', 'BOXER', 'BOXES', 'BOZOS', 'BRADY', 'BRAND', 'BRASS', 'BREAD', 'BREAK', 'BREED', 'BRICK', 'BRIDE', 'BRING', 'BRINK', 'BROAD', 'BROKE', 'BROWN', 'BUCKS', 'BUDDY', 'BUILD', 'BUILT', 'BULKY', 'BURNS', 'BURNT', 'BURST', 'BUSTS', 'CABLE', 'CALLS', 'CANDY', 'CARDS', 'CARRY', 'CATCH', 'CAUSE', 'CEASE', 'CELLO', 'CHAIR', 'CHAOS', 'CHARM', 'CHEAP', 'CHECK', 'CHEER', 'CHEST', 'CHEWS', 'CHILD', 'CHIPS', 'CHOSE', 'CHUGS', 'CHUNK', 'CIVIL', 'CLAIM', 'CLASS', 'CLAWS', 'CLEAR', 'CLERK', 'CLIMB', 'CLOCK', 'CLOSE', 'CLOUD', 'COATS', 'COHEN', 'COMES', 'CONED', 'CONTD', 'CORES', 'COSTS', 'COULD', 'COUNT', 'COURT', 'CRACK', 'CRAMS', 'CRAZY', 'CREEP', 'CROSS', 'CROWD', 'CUFFS', 'DANAS', 'DANCE', 'DARTS', 'DEALS', 'DENSE', 'DESKS', 'DIDNT', 'DINGY', 'DIRTY', 'DODGE', 'DOING', 'DOORS', 'DOUBT', 'DOZEN', 'DRAWN', 'DRAWS', 'DREAD', 'DRIFT', 'DRILL', 'DRINK', 'DRIVE', 'DROOP', 'DROPS', 'DRUGS', 'DUCKS', 'DYING', 'EAGER', 'EARLY', 'EARTH', 'EAVES', 'EDGES', 'EERIE', 'EIGHT', 'ELBOW', 'ELVIS', 'ENDED', 'ENJOY', 'ENTER', 'ENTRY', 'ERUPT', 'EVERY', 'EXIST', 'EXITS', 'EXTRA', 'EXXON', 'FACES', 'FADED', 'FADES', 'FALLS', 'FEELS', 'FELLA', 'FIELD', 'FIERY', 'FIFTH', 'FIFTY', 'FINAL', 'FINDS', 'FIRES', 'FIRST', 'FISTS', 'FIVES', 'FIXED', 'FLAME', 'FLANK', 'FLASH', 'FLIES', 'FLITS', 'FLOOR', 'FOODS', 'FORCE', 'FORMS', 'FORTH', 'FORTY', 'FOUND', 'FRAME', 'FRIED', 'FRONT', 'FULLY', 'GASES', 'GASPS', 'GATES', 'GAUNT', 'GAZES', 'GHOST', 'GIANT', 'GIVEN', 'GIVES', 'GLASS', 'GLEAM', 'GOING', 'GONNA', 'GOTTA', 'GOZER', 'GRABS', 'GRANT', 'GRAPH', 'GREAT', 'GREEN', 'GRIPS', 'GROAN', 'GROOM', 'GROUP', 'GROWL', 'GUARD', 'GUESS', 'GUEST', 'GUIDE', 'GULPS', 'HANDS', 'HANDY', 'HANGS', 'HAPPY', 'HASNT', 'HASTE', 'HAULS', 'HEADS', 'HEARD', 'HEARS', 'HEART', 'HEATS', 'HEAVY', 'HEELS', 'HELLO', 'HELPS', 'HERES', 'HIKES', 'HOLDS', 'HOLES', 'HOMES', 'HONEY', 'HONOR', 'HOODS', 'HOPED', 'HORSE', 'HOTEL', 'HOURS', 'HOUSE', 'HUMAN', 'HUNKS', 'HURRY', 'IMAGE', 'INDEX', 'INDIE', 'INFRA', 'INNER', 'IRISH', 'ITEMS', 'JAMBS', 'JEERS', 'JERKS', 'JESUS', 'JINOS', 'JOINS', 'JUDGE', 'JUMPS', 'KARMA', 'KEEPS', 'KEYED', 'KICKS', 'KNEES', 'KNOWN', 'KNOWS', 'LAMPS', 'LANDS', 'LARGE', 'LARRY', 'LASER', 'LATER', 'LAUGH', 'LEADS', 'LEANS', 'LEAPS', 'LEASE', 'LEAST', 'LEAVE', 'LEDGE', 'LEMME', 'LEVEL', 'LIFTS', 'LIGHT', 'LIKED', 'LIKES', 'LIMBO', 'LIMBS', 'LIMOS', 'LINES', 'LIONS', 'LIVES', 'LOBBY', 'LOCKS', 'LOLLS', 'LOOKS', 'LOOMS', 'LOOSE', 'LOPES', 'LOUIS', 'LOVED', 'LOVES', 'LOWER', 'LUCKY', 'LUNCH', 'LYING', 'MAGIC', 'MAJOR', 'MAKES', 'MANIC', 'MARKS', 'MAYBE', 'MAYER', 'MAYOR', 'MEANS', 'MEDIA', 'MEETS', 'METAL', 'METER', 'MIGHT', 'MIMES', 'MINDS', 'MISTS', 'MOLDS', 'MOLDY', 'MONEY', 'MORON', 'MOSES', 'MOUND', 'MOUNT', 'MOUTH', 'MOVED', 'MOVES', 'MOVIE', 'MUSES', 'MUSIC', 'MUSTY', 'NAILS', 'NAKED', 'NAMES', 'NASAL', 'NASTY', 'NEEDS', 'NERDS', 'NERVE', 'NEVER', 'NIGHT', 'NOBEL', 'NOISE', 'NOTES', 'NUDGE', 'ODDLY', 'OLSEN', 'OPENS', 'ORDER', 'OSCAR', 'OTHER', 'OUGHT', 'OUTER', 'OUTTA', 'PACKS', 'PAINT', 'PANEL', 'PANIC', 'PANTS', 'PAPER', 'PARTS', 'PARTY', 'PAUSE', 'PECKS', 'PEDAL', 'PEEKS', 'PEELS', 'PEERS', 'PESTS', 'PETER', 'PHONE', 'PHOTO', 'PICKS', 'PIECE', 'PILED', 'PLACE', 'PLANE', 'PLATE', 'PLAZA', 'PLEAS', 'PLODS', 'PLUMP', 'POINT', 'POKES', 'POSED', 'POSES', 'POUND', 'POURS', 'POWER', 'PRESS', 'PRINT', 'PRIZE', 'PROOF', 'PROPS', 'PROUD', 'PROVE', 'PULLS', 'PULSE', 'PUNCH', 'PUNKS', 'PUPIL', 'PURGE', 'PURSE', 'QUEST', 'QUICK', 'QUIET', 'QUITE', 'QUOTE', 'RACES', 'RACKS', 'RADIO', 'RAINS', 'RAMIS', 'RAPID', 'RAZOR', 'REACH', 'READS', 'READY', 'REALM', 'REAMS', 'REFER', 'RELAX', 'RESTS', 'RICAN', 'RIGHT', 'RINGS', 'RISES', 'RITES', 'RIVER', 'ROARS', 'ROAST', 'ROCKS', 'ROGER', 'ROLLS', 'ROMAN', 'ROOMY', 'ROUGH', 'SABRE', 'SADLY', 'SAILS', 'SALAD', 'SATIN', 'SCALE', 'SCALY', 'SCANS', 'SCENE', 'SECTS', 'SEEMS', 'SEIKO', 'SENSE', 'SERVE', 'SEVEN', 'SHAKE', 'SHAPE', 'SHEAF', 'SHEET', 'SHELF', 'SHINY', 'SHOCK', 'SHOOT', 'SHORT', 'SHOUT', 'SHOWS', 'SHUBS', 'SIGHS', 'SIGHT', 'SIGNS', 'SINAI', 'SINCE', 'SINGS', 'SIREN', 'SKIRT', 'SLAMS', 'SLAPS', 'SLEEP', 'SLICE', 'SLIDE', 'SLIME', 'SLIMY', 'SLIPS', 'SLOAR', 'SMALL', 'SMELL', 'SMILE', 'SMOKE', 'SNAPS', 'SNARL', 'SOCKS', 'SOLID', 'SORRY', 'SOTTO', 'SOULS', 'SOUND', 'SOUTH', 'SPACE', 'SPARE', 'SPEAK', 'SPECK', 'SPEED', 'SPEND', 'SPILL', 'SPINS', 'SPITS', 'SPLIT', 'SPOCK', 'SPOOK', 'SPOTS', 'SPRAY', 'SQUAD', 'STAFF', 'STAGE', 'STAND', 'STARE', 'STARS', 'START', 'STATE', 'STAYS', 'STEPS', 'STICK', 'STIFF', 'STILL', 'STONE', 'STOPS', 'STORE', 'STORM', 'STORY', 'STOUT', 'STUFF', 'STUNT', 'STYLE', 'SUCKS', 'SUITE', 'SUITS', 'SUNNY', 'SURGE', 'SURLY', 'SUSAN', 'SWING', 'SWIRL', 'TABLE', 'TAKEN', 'TAKES', 'TAPED', 'TAXIS', 'TEARS', 'TEARY', 'TENSE', 'TESTS', 'THANK', 'THATS', 'THEIR', 'THERE', 'THESE', 'THEYD', 'THICK', 'THING', 'THINK', 'THIRD', 'THOSE', 'THREE', 'THROW', 'TIGHT', 'TIMES', 'TIRED', 'TIRES', 'TITLE', 'TOAST', 'TODAY', 'TOOLS', 'TOPIC', 'TORSO', 'TOTAL', 'TOUCH', 'TOWEL', 'TRAIL', 'TRAPS', 'TRIED', 'TRIES', 'TRIPE', 'TRUST', 'TRUTH', 'TUDOR', 'TULLY', 'TURNS', 'UHHUH', 'UNCLE', 'UNDER', 'UNITS', 'UNTIL', 'UPPER', 'USING', 'USUAL', 'VAPOR', 'VENTS', 'VERGE', 'VIBES', 'VIDEO', 'VISIT', 'VISOR', 'VOICE', 'WAFTS', 'WAGON', 'WAIST', 'WAITS', 'WAKES', 'WALKS', 'WALLS', 'WANDS', 'WANNA', 'WANTS', 'WASNT', 'WASTE', 'WATCH', 'WATER', 'WAVER', 'WAVES', 'WEARS', 'WEAVE', 'WEEKS', 'WEIRD', 'WHATS', 'WHEEL', 'WHERE', 'WHICH', 'WHILE', 'WHINE', 'WHITE', 'WHOLE', 'WHOOP', 'WIDEN', 'WIDTH', 'WINKS', 'WIPER', 'WIPES', 'WIRED', 'WIRES', 'WISPS', 'WOMAN', 'WOMEN', 'WORDS', 'WORKS', 'WORLD', 'WORRY', 'WORSE', 'WORST', 'WORTH', 'WOULD', 'WRATH', 'WRITE', 'WRONG', 'YANKS', 'YARNS', 'YAWNS', 'YEARS', 'YELPS', 'YIELD', 'YOULL', 'YOUNG']

/**
 * Returns a hash code from a string
 * @param  {String} str The string to hash.
 * @return {Number}    A 32bit integer
 * @see http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 */
function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

const cache_breaker = '912ed803b2ce49e4a541068d435ab570'
const d = new Date();
const d_int = Math.abs(hashCode(d.getFullYear().toString() + d.getMonth().toString() + d.getDate().toString() + cache_breaker));

const answer=wordList[ d_int % wordList.length]
const numberOfAttempts=6;
const submitText = "ENTER";
const backspaceText = "←";
const alertNotificationTime=5000;
const winPhrases = [ 'Genius', 'Magnificent', 'Impressive', 'Splendid', 'Great', 'Phew' ];

class Alert extends React.Component {
  render() {
    return (
      <div className="alertContainer">
        {this.props.alerts.map((alert, index) => {
          return (
            <div key={index} className={"alert " + (this.props.gameComplete ? "game-complete" : "")}>
              {alert.text}
            </div>
          )
        })}
      </div>
    )
  }
}

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
  
  submitAttempt() {
    if ( !this.state.gameComplete ) {
      const attempt = this.state.attempts[this.state.currentAttempt]

      let accepted = false;
      let alertText = "";
      let correct = false

      if ( attempt.join("") === this.props.answer ) {
        alertText = this.props.winPhrases[this.state.currentAttempt];
        correct = true;
        accepted = true;
      } else if ( attempt.filter((letter) => letter !== "").length !== this.props.answer.length ) {
        alertText = "Not enough letters";
      } else if ( !this.props.wordList.includes(attempt.join("")) ) {
        alertText = "Not in word list";
      } else {
        accepted = true;
      }
      
      if ( accepted ) {
        this.updateAcceptedLetters(attempt);
        const nextAttempt = this.state.currentAttempt + 1
        this.setState({currentAttempt: nextAttempt, nextLetterIndex: 0, lastAttemptRejected: false});
        if ( nextAttempt >= this.props.numberOfAttempts || correct) {
          this.setState({gameComplete: true});
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
            notificationTime={alertNotificationTime}
          />
        </div>
      </div>
    );
  }
}

class IntroModal extends React.Component {
  render() {
    if (this.props.visible) {
      return  (
        <div className="intro-modal-container">
          <div class="intro-modal">
            <div class="close-icon" onClick={this.props.closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path fill="var(--color-tone-1)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
            <section>
              <p>Guess the VINCE CLORDLE in six tries.</p>
              <p>This is a dumb parody of WORDLE I made to brush up on front-end development.</p>
              <p>Please don't play this game. Please go play the real WORDLE. Trust me that it's better.</p>
              <p>This is like WORDLE, but the words are all from the 1984 hit comedy Ghostbusters.</p>
              <p>So, you can try GHOST, because that word was spoken in the movie, but LEMUR won't work, because obviously nobody said LEMUR in the 1984 hit comedy Ghostbusters.</p>
            </section>
            <section class="questions">
              <h2>Questions?</h2>
              <h3>Why doesn't the word VINCE work? Surely this dumb game was named after Vince Clortho, Keymaster of Gozer...Volguus Zildrohoar, Lord of the Seboullia?</h3>
              <p>It was, but his name is actually spelled VINZ, not VINCE, and that's only four letters. So that won't work. Sorry, no refunds.</p>
              <h3>Why didn't you name it VINZ CLORDLE then? Had you already purchased vinceclordle.com?</h3>
              <p>No, I figured that out long before I purchased vinceclordle.com. I just like VINCE better.</p>
              <h3>This seems dumb and hard for no reason. So many common five letter words like DREAM and BRAIN aren't available.</h3>
              <p>Yep. It sure is. Like I said, you really shouldn't even play this. Only five letter words from the 1984 hit comedy Ghostbusters appear. Again, I'm sorry, but I can't offer any refunds.</p>
              <h3>It doesn't even add anything new to the premise of the game.</h3>
              <p>Correct. It does not. No refunds.</p>
            </section>
            <section>
              <p><strong>A new VINCE CLORDLE will available each day!</strong></p>
            </section>
          </div>
        </div>
      )
    }
  }
}

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

class Tile extends React.Component {
  render() {
    
    return (
      <div className={"tile " + (this.props.status) } style={{"--index": this.props.index, "--tile-bg-color-name": "var(--tile-" + this.props.status + ")"}} >
        {this.props.value}
      </div>
    )
  }
}

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    document.addEventListener("keypress", (event) => {
      const key = event.key.toUpperCase();
      if (keyboardLayout.flat().includes(key) && key !== this.props.submitText.toUpperCase() && key !== this.props.backspaceText.toUpperCase()) {
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

class Header extends React.Component {
  render() {
    return(
      <header className="header">
        <div className='menu-left'>
          <div className="help-icon" onClick={this.props.helpOnClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path fill="var(--color-tone-1)" d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
            </svg>
          </div>
          </div>
        <div className="title">
          <h1>Vince Clordle</h1>
        </div>
        <div className='menu-right'></div>
      </header>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div class="container">
    <Game
      wordList={wordList}
      winPhrases={winPhrases}
      answer={answer}
      numberOfAttempts={numberOfAttempts}
      keyboardLayout={keyboardLayout}
      submitText={submitText}
      backspaceText={backspaceText}
      alertNotificationTime={alertNotificationTime}
    />
  </div>
);

