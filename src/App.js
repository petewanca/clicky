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
 
  // credit @ https://javascript.info/task/shuffle
  shuffleCards = (images) => {
      for (let i = images.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
      }
  }

  handleImageClick = event => {
    event.preventDefault();
    console.log(event.target);
    
    let userSelection = event.target;
    let chosenCards = this.state.chosenCards
    
    // if chosenCards state does not contain user selection, continue
    if (!chosenCards.includes(userSelection.alt)) {
        
      chosenCards.push(userSelection.alt); 
      userSelection.setAttribute('id', 'clicked')
      console.log(chosenCards);

      this.setState({
        currentScore: this.state.currentScore+1
      })

      // this.shuffleCards(images)

    // check current score for win event
    } else if (this.state.currentScore === 9) {
      alert('You win, play again.');
      this.setState({
          currentScore: 0,
          topScore: 9,
          chosenCards: []
      })

      // this.shuffleCards(images)

    // game over scenario, if the chosenCards state contains user selection
    // reset state back to 0 across the board
    } else if (chosenCards.includes(userSelection.alt)) {
      alert('You lose, please try again.')

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

      this.shuffleCards(images)
    } 
  };


  render () {

    const style = {
      backgroundStyle: {
        backgroundImage: 'url(https://hdwallsource.com/img/2015/7/grey-grunge-wallpaper-46683-48106-hd-wallpapers.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    };

    return (
    <div style={style.backgroundStyle}>
      <Nav 
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
      />
        <div className='container' key='mainContainer' >
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