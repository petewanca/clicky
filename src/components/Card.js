import React, { Component } from 'react';

class Card extends Component {

  render () {
    const props = this.props

    const styles = {
        imageStyle: {
            height: '200px',
            width: '200px'
        }
    };
      
    return (

      <div className='text-center'>
        <img style={styles.imageStyle}
            className='clicky m-3 border border-dark rounded text-center'
            key={props.id}
            src={props.src}
            alt={props.alt}
        /> 
      </div>

    )
  }
    
}

export default Card;