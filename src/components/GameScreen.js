import React, { Component } from 'react'
import EditCard from './EditCard'
import Button from './Button'

export default class GameScreen extends Component {
  render() {
    const { players, onUpdateScore, onResetScore, onSave } = this.props
    return (
      <React.Fragment>
        {players.map((player, index) => (
          <EditCard
            key={index}
            title={player.name}
            score={player.roundScore}
            onUpdate={score => onUpdateScore(index, score)}
          />
        ))}
        <Button onClick={onResetScore}>Reset Scores</Button>
        <Button onClick={onSave}>Save</Button>
      </React.Fragment>
    )
  }
}
