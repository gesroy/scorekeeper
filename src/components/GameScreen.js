import React, { Component } from 'react'
import PlayerCard from './PlayerCard'
import Button from './Button'

export default class GameScreen extends Component {
  render() {
    const { players, onUpdateScore, onResetScore, onBackToStart } = this.props
    return (
      <React.Fragment>
        {players.map((player, index) => (
          <PlayerCard
            key={index}
            title={player.name}
            score={player.score}
            onUpdate={score => onUpdateScore(index, score)}
          />
        ))}
        <Button onClick={onResetScore}>Reset Scores</Button>
        <Button onClick={onBackToStart}>Back</Button>
      </React.Fragment>
    )
  }
}
