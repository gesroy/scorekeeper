import React, { Component } from 'react'
import './App.css'
import Button from './Button.js'
import ScoreBoard from './ScoreBoard'
import PlayerSetup from './PlayerSetup'
import styled from 'styled-components'

const StyledStartScreen = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const StyledUser = styled.section`
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
    if (this.state.users.length > 0) {
      this.setState({
        showStartScreen: false,
      })
    }
  }
  //Hier mit einer pfeilfunktion ist binden. damit wird es yu einer class property

  addPlayer = value => {
    const { users } = this.state
    this.setState({
      users: [...users, { name: value, score: 0 }],
    })
  }

  renderWarningOrButton() {
    const { users } = this.state
    return users.length ? (
      <React.Fragment>
        <Button onClick={this.startGame}>Play!</Button>
        <StyledLittleButton onClick={() => this.deleteAllUsers()}>
          Delete users
        </StyledLittleButton>
      </React.Fragment>
    ) : (
      <div>Please enter at least one user</div>
    )
  }

  deleteAllUsers() {
    this.setState({
      users: [],
    })
  }

  renderUsers() {
    return this.state.users.map((user, i) => (
      <StyledUser key={i}>
        {user.name}
        <StyledLittleButton onClick={() => this.deleteUser(i)}>
          x
        </StyledLittleButton>
      </StyledUser>
    ))
  }

  deleteUser(i) {
    const { users } = this.state
    this.setState({
      users: [...users.slice(0, i), ...users.slice(i + 1)],
    })
  }

  renderStartScreen() {
    return (
      <StyledStartScreen>
        <h1>Welcome!</h1>
        {this.renderUsers()}
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
        {this.state.users.map((user, index) => (
          <ScoreBoard
            key={index}
            title={user.name}
            score={user.score}
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
