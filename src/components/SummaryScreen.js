import React, { Component } from 'react'
import SummaryCard from './SummaryCard'
import Button from './Button'
import { Link } from 'react-router-dom'

export default class SummaryScreen extends Component {
  render() {
    const { players, onAddRound, onBackToStart } = this.props
    return (
      <React.Fragment>
        {players.map((player, i) => (
          <SummaryCard key={i} title={player.name} scores={player.scores} />
        ))}

        {players.length ? (
          <Link to="/game" style={{ textDecoration: 'none' }}>
            <Button onClick={onAddRound}>Add Round</Button>
          </Link>
        ) : (
          <div>
            <strong>Please add at least one player</strong>
          </div>
        )}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button onClick={onBackToStart}>Back to Startscreen</Button>
        </Link>
      </React.Fragment>
    )
  }
}
