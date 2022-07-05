import React from 'react';

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

export default IntroModal