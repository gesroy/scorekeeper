import React, { Component } from 'react'
import './App.css'
import Button from './Button.js'
import ScoreBoard from './ScoreBoard'
import PlayerSetup from './PlayerSetup'

class App extends Component {
  state = {
    showStartScreen: true,
    users: [],
  }

  updateScore = (index, value) => {
    const { users } = this.state
    const user = users[index]
    this.setState({
      users: [
        ...users.slice(0, index),
        { ...user, score: user.score + value },
        ...users.slice(index + 1),
      ],
    })
  }

  resetScore = () => {
    this.setState({
      users: this.state.users.map(user => ({ ...user, score: 0 })),
    })
  }

  startGame = () => {
    this.setState({
      showStartScreen: false,
    })
  }
  //Hier mit einer pfeilfunktion ist binden. damit wird es yu einer class property

  renderStartScreen() {
    return (
      <div>
        <h1>Start Screen</h1>
        {this.state.users.map((user, i) => (
          <div key={i}>{user.name}</div>
        ))}
        <PlayerSetup onSubmit={this.addPlayer} />
        <Button onClick={this.startGame}>Play!</Button>
      </div>
    )
  }

  renderActiveGame() {
    return (
      <React.Fragment>
        {this.state.users.map((user, index) => (
          <ScoreBoard
            key={index}
            title={user.name}
            score={user.score}
            onUpdate={score => this.updateScore(index, score)}
          />
        ))}
        <Button onClick={this.resetScore}>Reset</Button>
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
