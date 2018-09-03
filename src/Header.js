import React, { Component } from 'react'
import './App.css'
import Rating from './Rating.js'

class Header extends Component {
  state = {
    rating: 0,
  }

  updateRating = value => {
    this.setState({ rating: value })
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <Rating rating={this.state.rating} callback={this.updateRating} />
          <h1 className="App-title">
            Hello World{' '}
            <span role="img" arial-label="emoji waving hand">
              👋🏼
            </span>
          </h1>
        </header>
      </div>
    )
  }
}

export default Header
