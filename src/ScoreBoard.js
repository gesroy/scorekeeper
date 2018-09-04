import React, { Component } from 'react'
import ScoreUpdater from './ScoreUpdater'
import './ScoreBoard.css'

export default class ScoreBoard extends Component {
  render() {
    const { title, score, onUpdate } = this.props

    return (
      <div className="ScoreBoard">
        <div className="headline">
          {title}
          {score}
        </div>
        <ScoreUpdater onClick={onUpdate} />
      </div>
    )
  }
}
