import React, { Component } from 'react';
import images from './images'; // array of image objects
import './App.css'; // default styling
import Scrambler from './components/Scrambler'; // sends images to DOM

class App extends Component {

  state = {
    images
  };

  render () {
    return (

      <div className='container'>
        <div className='row'>
          {/* <div className='col-lg-12'> */}
            {
              this.state.images.map(image => (
                <Scrambler
                  key={image.id}
                  id={image.id}
                  src={image.image}
                  alt={image.name}
                />      
              ))
            }
          {/* </div> */}
        </div>
      </div>
    );
  }

}

export default App;