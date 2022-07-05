import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './game';

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
const d_hash = Math.abs(hashCode(d.getFullYear().toString() + d.getMonth().toString() + d.getDate().toString() + cache_breaker));

const answer = wordList[ d_hash % wordList.length]

const numberOfAttempts=6;

const submitText = "ENTER";
const backspaceText = "←";
const alertNotificationTime=5000;

const lang = 'en'; // TODO: set this based on window.navigator.language
const game_text = {
  en: {
    alerts: {
      not_enough_letters: "Not enough letters",
      not_in_word_list: "Not in the 1984 hit comedy Ghostbusters",
    },
    win_phrases: [ 'Genius', 'Magnificent', 'Impressive', 'Splendid', 'Great', 'Phew' ],
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div class="container">
    <Game
      wordList={wordList}
      game_text={game_text[lang]}
      answer={answer}
      numberOfAttempts={numberOfAttempts}
      keyboardLayout={keyboardLayout}
      submitText={submitText}
      backspaceText={backspaceText}
      alertNotificationTime={alertNotificationTime}
    />
  </div>
);

