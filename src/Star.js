import React, { Component } from 'react'
import './Star.css'

class Star extends Component {
  render() {
    const { onClick, filled } = this.props
    const className = filled ? 'Star filled' : 'Star'
    return (
      <svg onClick={onClick} width="24" height="24" viewBox="0 0 24 24">
        <path
          className={className}
          d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12, 17.27Z"
        />
      </svg>
    )
  }
}

export default Star
