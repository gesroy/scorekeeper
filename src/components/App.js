import React, { Component } from 'react'
import './App.css'
import Button from './Button'
import ScoreBoard from './PlayerCard'
import PlayerSetup from './PlayerInput'
import styled from 'styled-components'
import { save, load } from '../services'

const StyledStartScreen = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const StyledPlayer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledLittleButton = styled.div`
  height: 30px;
  width: 30px;
  background-color: hotpink;
`

class App extends Component {
  state = {
    showStartScreen: true,
    players: load('players') || [],
  }

  updateScore = (index, value) => {
    const { players } = this.state
    const player = players[index]
    this.setState({
      players: [
        ...players.slice(0, index),
        { ...player, score: player.score + value },
        ...players.slice(index + 1),
      ],
    }),
      this.savePlayers
  }

  savePlayers() {
    save('players', this.state.players)
  }

  resetScore = () => {
    this.setState(
      {
        players: this.state.players.map(player => ({ ...player, score: 0 })),
      },
      this.savePlayers
    )
  }

  startGame = () => {
    if (this.state.players.length > 0) {
      this.setState({
        showStartScreen: false,
      })
    }
  }
  //Hier mit einer pfeilfunktion ist binden. damit wird es yu einer class property

  addPlayer = value => {
    const { players } = this.state
    this.setState(
      {
        players: [...players, { name: value, score: 0 }],
      },
      this.savePlayers
    )
  }

  renderWarningOrButton() {
    const { players } = this.state
    return players.length ? (
      <React.Fragment>
        <Button onClick={this.startGame}>Play!</Button>
        <StyledLittleButton onClick={() => this.deleteAllPlayers()}>
          Delete players
        </StyledLittleButton>
      </React.Fragment>
    ) : (
      <div>Please enter at least one player</div>
    )
  }

  deleteAllPlayers() {
    this.setState(
      {
        players: [],
      },
      this.savePlayers
    )
  }

  renderPlayers() {
    return this.state.players.map((player, i) => (
      <StyledPlayer key={i}>
        {player.name}
        <StyledLittleButton onClick={() => this.deletePlayer(i)}>
          x
        </StyledLittleButton>
      </StyledPlayer>
    ))
  }

  deletePlayer(i) {
    const { players } = this.state
    this.setState(
      {
        players: [...players.slice(0, i), ...players.slice(i + 1)],
      },
      this.savePlayers
    )
  }

  renderStartScreen() {
    return (
      <StyledStartScreen>
        <h1>Welcome!</h1>
        {this.renderPlayers()}
        <PlayerSetup onSubmit={this.addPlayer} />
        {this.renderWarningOrButton()}
      </StyledStartScreen>
    )
  }

  backToStart = () => {
    this.setState({
      showStartScreen: true,
    })
  }

  renderActiveGame() {
    return (
      <React.Fragment>
        {this.state.players.map((player, index) => (
          <ScoreBoard
            key={index}
            title={player.name}
            score={player.score}
            onUpdate={score => this.updateScore(index, score)}
          />
        ))}
        <Button onClick={this.resetScore}>Reset Scores</Button>
        <Button onClick={this.backToStart}>Back</Button>
      </React.Fragment>
    )
  }

  render() {
    const { showStartScreen } = this.state
    return (
      <div className="App">
        {showStartScreen ? this.renderStartScreen() : this.renderActiveGame()}
      </div>
    )
  }
}

export default App
