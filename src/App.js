import React, { Component } from "react";
import images from "./images"; // array of image objects
// import assets from "./assets";
import "./App.css"; // default styling
import Scrambler from "./components/Scrambler"; // sends images to DOM

class App extends Component {

  state = {
    images
  }

  render () {
    return (
      
      <div>
          
          {
            this.state.images.map(image => (
              <Scrambler
                className="clickMe"
                id={image.id}
                src={image.image}
                alt={image.name}
              />          
            ))
          }

      </div>
    );
  }

}

export default App;