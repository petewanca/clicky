import React, { Component } from 'react'

class Nav extends Component {
  
  render() {
    const props = this.props

    return (
      <div className='row py-3 bg-dark text-light'>
        <div className='offset-lg-1 col-lg-5 text-left'>
          <h1>Anime Clicky!</h1>
          <p>Click images to earn points. Don't click an image more than once or you lose.</p>
        </div>
        <div className='col-lg-5 text-right'>
          <h2>Current Score: <strong>{props.currentScore}</strong></h2>
          <h2>Top Score: <strong>{props.topScore}</strong></h2>  
        </div>
      </div>
    )
  }
}

export default Nav;