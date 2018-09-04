import React, { Component } from 'react'
import './App.css'
import Score from './Score.js'
import Button from './Button.js'
import ScoreUpdater from './ScoreUpdater'
import ScoreBoard from './ScoreBoard'

class App extends Component {
  state = {
    users: [
      { name: 'Laura', score: 0 },
      { name: 'Lena', score: 0 },
      { name: 'Jan', score: 0 },
      { name: 'Isabella', score: 0 },
      { name: 'Jojo', score: 0 },
    ],
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

  render() {
    return (
      <div className="App">
        {this.state.users.map((user, index) => (
          <ScoreBoard
            key={index}
            title={user.name}
            score={user.score}
            onUpdate={score => this.updateScore(index, score)}
          />
        ))}

        <Button onClick={this.resetScore}>Reset</Button>
      </div>
    )
  }
}

export default App
