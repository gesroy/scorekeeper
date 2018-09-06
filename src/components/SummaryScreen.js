import React, { Component } from 'react'
import SummaryCard from './SummaryCard'
import Button from './Button'
import { Link } from 'react-router-dom'

export default class SummaryScreen extends Component {
  render() {
    const { players, onAddRound, onBackToStart } = this.props
    return (
      <div>
        <h1>Summary Screen</h1>
        {players.map((player, i) => (
          <SummaryCard key={i} title={player.name} scores={player.scores} />
        ))}
        <Link to="/">
          <Button onClick={onBackToStart}>Back</Button>
        </Link>
        {players.length ? (
          <Link to="/game">
            <Button onClick={onAddRound}>Add Round</Button>
          </Link>
        ) : (
          <div>
            <strong>Please add at least one player</strong>
          </div>
        )}
      </div>
    )
  }
}
