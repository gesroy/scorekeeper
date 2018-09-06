import React, { Component } from 'react'
import SummaryCard from './SummaryCard'
import Button from './Button'

export default class SummaryScreen extends Component {
  render() {
    const { players, rounds } = this.props
    return (
      <div>
        {players.map(player => (
          <SummaryCard
            title={player.title}
            score={player.score}
            rounds={rounds}
          />
        ))}
        <Button>Add Round</Button>
      </div>
    )
  }
}
