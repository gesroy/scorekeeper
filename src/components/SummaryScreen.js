import React, { Component } from 'react'
import SummaryCard from './SummaryCard'
import Button from './Button'

export default class SummaryScreen extends Component {
  render() {
    const { players, onAddRound, onBackToStart } = this.props
    return (
      <div>
        <h1>Summary Screen</h1>
        {players.map((player, i) => (
          <SummaryCard key={i} title={player.name} scores={player.scores} />
        ))}
        <Button onClick={onBackToStart}>Back</Button>
        {players.length ? (
          <Button onClick={onAddRound}>Add Round</Button>
        ) : (
          <div>
            <strong>Please add at least one player</strong>
          </div>
        )}
      </div>
    )
  }
}
