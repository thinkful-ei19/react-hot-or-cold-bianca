import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
// import Infomodal from './info-modal';


class Game extends React.Component {
    constructor() {
        super()
        this.state={
            guesses: [],
            feedback: 'Make your guess!', 
            correctAnswer: Math.floor(Math.random() * 100) + 1,
            infoModal: false
        };
    }
    restartGame() {
        this.setState({
          guesses: [],
          feedback: 'Make your guess!',
          correctAnswer: Math.floor(Math.random() * 100) + 1
        });
      }
    toggleInfoModal() {
        this.setState({
            infoModal: true
        })
    }
    
    
    addToList(guess) {
        guess = parseInt(guess, 10);
        if (isNaN(guess)) {
            this.setState({ feedback: 'Please enter a valid number' });
            return;
        }
        
        const difference = Math.abs(guess - this.state.correctAnswer);
        let feedback;
        if (difference >= 50) {
          feedback = 'You\'re Ice Cold...';
        } else if (difference >= 30) {
          feedback = 'You\'re Cold...';
        } else if (difference >= 10) {
          feedback = 'You\'re Warm.';
        } else if (difference >= 1) {
          feedback = 'You\'re Hot!';
        } else {
          feedback = 'You got it!';
        }

        this.setState({
            feedback,
            guesses: [...this.state.guesses, guess] 
        });

        document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
    }
    

   




    render () {
        return (
            <div>
                <Header onRestartGame={()=> this.restartGame()} infoModal={this.state.infoModal} toggleInfoModal={()=>this.toggleInfoModal()}/>
                <GuessSection feedback={this.state.feedback} addToList={(guess) => this.addToList(guess)} />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses}  />
                {/* <Infomodal/> */}
            </div>
        );
    }
}

export default Game;

