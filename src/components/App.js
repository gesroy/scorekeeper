import React, { Component } from 'react'
import './App.css'
import { save, load } from '../services'
import StartScreen from './StartScreen'
import GameScreen from './GameScreen'
import SummaryScreen from './SummaryScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  state = {
    showScreen: 'start', //or game or summary
    players: load('players') || [],
  }

  updateScore = (index, value) => {
    const { players } = this.state
    const player = players[index]
    this.setState(
      {
        players: [
          ...players.slice(0, index),
          { ...player, roundScore: player.roundScore + value },
          ...players.slice(index + 1),
        ],
      },
      this.savePlayers
    )
  }

  saveRound = () => {
    const { players } = this.state
    this.setState(
      {
        showScreen: 'summary',
        players: players.map(player => ({
          ...player,
          scores: [...player.scores, player.roundScore],
          roundScore: 0,
        })),
      },
      this.savePlayers
    )
  }

  savePlayers() {
    save('players', this.state.players)
  }

  resetScores = () => {
    const { players } = this.state
    this.setState({
      players: players.map(
        player => ({
          ...player,
          scores: [...player.scores, player.roundScore],
          roundScore: 0,
        }),
        this.savePlayers
      ),
    })
  }

  startGame = () => {
    if (this.state.players.length > 0) {
      this.setState({
        showScreen: 'summary',
      })
    }
  }
  //Hier mit einer pfeilfunktion ist binden. damit wird es yu einer class property

  addPlayer = name => {
    const { players } = this.state
    this.setState(
      {
        players: [...players, { name, scores: [0], roundScore: 0 }],
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
      showScreen: 'start',
    })
  }

  addRound = () => {
    this.setState({
      showScreen: 'game',
    })
  }

  renderScreen() {
    if (this.state.showScreen === 'start') {
      return this.runStartScreen()
    } else if (this.state.showScreen === 'summary') {
      return this.runSummaryScreen()
    } else if (this.state.showScreen === 'game') {
      return this.runGameScreen()
    } else {
      return this.runStartScreen()
    }
  }

  runSummaryScreen = () => {
    return (
      <SummaryScreen
        players={this.state.players}
        onUpdateScore={this.updateScore}
        onAddRound={this.addRound}
        onBackToStart={this.backToStart}
      />
    )
  }

  runStartScreen = () => {
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

  runGameScreen = () => {
    return (
      <GameScreen
        players={this.state.players}
        score={this.state.players.score}
        onResetScore={this.resetScores}
        onBackToStart={this.backToStart}
        onUpdateScore={this.updateScore}
        onSave={this.saveRound}
      />
    )
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={this.runStartScreen} />
          <Route path="/summary" render={this.runSummaryScreen} />
          <Route path="/game" render={this.runGameScreen} />
        </div>
      </Router>
    )
  }
}

export default App
