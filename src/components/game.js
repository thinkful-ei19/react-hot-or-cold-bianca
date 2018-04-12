import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

class Game extends React.Component {
    constructor() {
        super()

        this.state={
            guesses: [],
            feedback: 'Make your guess!'
        }
    }




    render () {
        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.feedback} />
                <GuessCount count={3} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}

export default Game;

