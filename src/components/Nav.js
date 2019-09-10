import React, { Component } from 'react'

class Nav extends Component {
  
  render() {
    const props = this.props

    return (
      <div className='row py-3 bg-dark text-light'>
        <div className='col-lg-6 text-center'>
          <h1>The Many Shades of Cage</h1>
          <p>Click images to earn points. Don't click an image more than once or you lose.</p>
        </div>
        <div className='col-lg-5 text-right'>
          <h2><strong>Current Score:</strong> {props.currentScore}</h2>
          <h2><strong>Top Score:</strong> {props.topScore}</h2>  
        </div>
      </div>
    )
  }
}

export default Nav;