import React, { Component } from 'react'
import Star from './Star.js'

class Rating extends Component {
  renderStars() {
    const { callback, rating } = this.props

    let result = []
    let filled
    for (let i = 0; i < 5; i++) {
      filled = i < rating ? true : false
      result = [
        ...result,
        <Star key={i} onClick={() => callback(i + 1)} filled={filled} />,
      ]
    }
    return result
  }

  render() {
    return <React.Fragment>{this.renderStars()}</React.Fragment>
  }
}

export default Rating
