import React, { Component } from 'react'
import Button from './Button.js'
import './ScoreUpdater.css'

export default class ScoreUpdater extends Component {
  render() {
    const { onClick } = this.props

    return (
      <div className="ScoreUpdater">
        <Button onClick={() => onClick(-10)}> -10 </Button>
        <Button onClick={() => onClick(-5)}> -5 </Button>
        <Button onClick={() => onClick(-1)}> -1 </Button>
        <Button onClick={() => onClick(+1)}> +1 </Button>
        <Button onClick={() => onClick(+5)}> +5 </Button>
        <Button onClick={() => onClick(+10)}> +10 </Button>
      </div>
    )
  }
}
