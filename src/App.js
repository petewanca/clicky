import React, { Component } from "react";
import images from "./assets/images"; // array of image objects
import "./App.css"; // default styling
import Scrambler from "./components/Scrambler"; // sends images to DOM

class App extends Component {

  state = {
    images
  }

  render () {
    return (
      <div>
          <p>Test.</p>
          
          {this.state.images.map(image => (
            <Scrambler
              className="clickMe"
              id={image.id}
              src={image.src}
              alt={image.alt}
            />          
          ))}

      </div>
    );
  }

}

export default App;
