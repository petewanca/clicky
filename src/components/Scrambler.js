import React, { Component } from 'react';

class Scrambler extends Component {

  state = {
    counter: 0
  };

  handleClick = event => {
    event.preventDefault();

    let counter = this.state.counter;
    counter++
    console.log(counter);
  };

  render () {
    const props = this.props

    const styles = {
        imageStyle: {
            height: '200px',
            width: '200px'
        }
    };
      
    return (

      <div>
        <a 
        href='/' 
        onClick={this.handleClick}
        >
          <img style={styles.imageStyle}
              className='clicky'
              key={props.id}
              id={props.id}
              src={props.src}
              alt={props.alt}
          /> 
        </a>
      </div>

    )
  }
    
}

export default Scrambler;