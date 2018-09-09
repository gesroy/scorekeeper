import React, { Component } from 'react'
import GameCard from './GameCard'
import Button from './Button'
import { Link } from 'react-router-dom'

export default class GameScreen extends Component {
  render() {
    const { players, onUpdateScore, onResetScores, onSave } = this.props
    return (
      <React.Fragment>
        {players.map((player, index) => (
          <GameCard
            key={index}
            title={player.name}
            score={player.roundScore}
            onUpdateScore={score => onUpdateScore(index, score)}
          />
        ))}
        <Link to="/summary" style={{ textDecoration: 'none' }}>
          <Button onClick={onSave}>Save</Button>
        </Link>
        <Button onClick={onResetScores}>Reset Scores</Button>
      </React.Fragment>
    )
  }
}
