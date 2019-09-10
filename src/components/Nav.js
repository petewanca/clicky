import React, { Component } from 'react'

class Nav extends Component {
  
  render() {
    const props = this.props

    return (
      <div className='row py-5 bg-dark text-light'>
        <div className='col-lg-6 text-center'>Full Metal Alechemist Clicky!</div>
        <div className='col-lg-3 text-center'>Current Score: {props.currentScore}</div>
        <div className='col-lg-3 text-center'>Top Score: {props.topScore}</div>
      </div>
    )
  }
}

export default Nav;