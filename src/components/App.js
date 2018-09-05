import React, { Component } from 'react'
import './App.css'
import { save, load } from '../services'
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

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

  savePlayers = () => {
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

  deleteAllPlayers = () => {
    this.setState(
      {
        players: [],
      },
      this.savePlayers
    )
  }

  deletePlayer = i => {
    const { players } = this.state
    this.setState(
      {
        players: [...players.slice(0, i), ...players.slice(i + 1)],
      },
      this.savePlayers
    )
  }

  backToStart = () => {
    this.setState({
      showStartScreen: true,
    })
  }

  runStartScreen() {
    return (
      <StartScreen
        players={this.state.players}
        onStartGame={this.startGame}
        onDeleteAllPlayers={this.deleteAllPlayers}
        onAddPlayer={this.addPlayer}
        onDeletePlayer={this.deletePlayer}
      />
    )
  }

  runGameScreen() {
    return (
      <GameScreen
        players={this.state.players}
        onResetScore={this.resetScore}
        onBackToStart={this.backToStart}
        onUpdateScore={this.updateScore}
      />
    )
  }

  render() {
    const { showStartScreen } = this.state
    return (
      <div className="App">
        {showStartScreen ? this.runStartScreen() : this.runGameScreen()}
      </div>
    )
  }
}

export default App
