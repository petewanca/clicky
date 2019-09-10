import React, { Component } from 'react';
import images from './images'; // array of image objects
import './App.css'; // default styling
import Card from './components/Card'; // sends images to DOM
import Nav from './components/Nav'; //

class App extends Component {

  state = {
    images,
    currentScore: 0,
    topScore: 0,
    chosenCards: []
  };

  handleImageClick = event => {
    event.preventDefault();
    console.log(event.target);

    let userSelection = event.target;
    let chosenCards = this.state.chosenCards
    
    // if the state of chosenCards is empty, proceed
    if (!chosenCards.length) { 
      // push the alt text (Card Name) to chosenCards state
      // and add id of 'clicked' to user selected element
      chosenCards.push(userSelection.alt); 
      // userSelection.setAttribute('id', 'clicked')
      console.log(chosenCards);

      let currentScore = this.state.currentScore + 1;
      this.setState({
        currentScore: currentScore
      });

    // if the chosenCards state contains user selection, game over
    // reset state back to 0 across the board
    } else if (chosenCards.includes(userSelection.alt)) {
      alert("You lose and your scores have been reset")
      
      // check/set state top score
      if (this.state.currentScore > this.state.topScore) {
        this.setState({
          topScore: this.state.currentScore
        })
      }
      this.setState({
        currentScore: 0,
        // topScore: 0,
        chosenCards: []
      })

    // if chosenCards state does not contain user selection, continue
    } else if (!chosenCards.includes(userSelection.alt)) {
        
      chosenCards.push(userSelection.alt); 
      userSelection.setAttribute('id', 'clicked')
      console.log(chosenCards);

      this.setState({
        currentScore: this.state.currentScore+1
      })
  
    }
        
  };

  render () {
    return (
    <div>
      <Nav 
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
      />
        <div className='container' key='mainContainer'>
          <div className='row' key='imageRow'>
              {
                this.state.images.map(image => (
                  <a 
                    href='/' 
                    onClick={this.handleImageClick} 
                    key={image.id}
                    className='col-lg-4 text-center'
                  >
                    <Card
                      key={image.id}
                      id={image.id}
                      src={image.image}
                      alt={image.name}
                    />      
                  </a>
                ))
              }
          </div>
        </div>
      </div>
    );
  }

}

export default App;