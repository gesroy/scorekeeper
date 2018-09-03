import React, { Component } from 'react'
import './App.css'
import Score from './Score.js'
import Button from './Button.js'
import ScoreUpdater from './ScoreUpdater'

class App extends Component {
  state = { score: 0 }

  updateScore = score => {
    this.setState({ score: score + this.state.score })
  }

  resetScore = () => {
    this.setState({
      score: 0,
    })
  }

  render() {
    return (
      <div className="App">
        <Score value={this.state.score} />
        <ScoreUpdater onClick={this.updateScore} />
        <Button text="Reset" onClick={() => this.setState({ score: 0 })}>
          Reset
        </Button>
      </div>
    )
  }
}

export default App
