import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './Button'
import PlayerInput from './PlayerInput'
import { Link } from 'react-router-dom'

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

const StyledUnpopularButton = styled.div`
  height: 30px;
  border: 1px solid teal;
  border-radius: 10px;
  display: inline-block;
  margin: 15px;
  padding: 5px;
`

export default class StartScreen extends Component {
  renderWarningOrButton() {
    const { players, onStartGame, onDeleteAllPlayers } = this.props
    return players.length ? (
      <React.Fragment>
        <Link to="/summary" style={{ textDecoration: 'none' }}>
          <Button onClick={onStartGame}>Play!</Button>
        </Link>
        <StyledUnpopularButton onClick={() => onDeleteAllPlayers()}>
          Delete players
        </StyledUnpopularButton>
      </React.Fragment>
    ) : (
      <div>Please enter at least one player</div>
    )
  }

  renderPlayers() {
    const { players, onDeletePlayer } = this.props
    return players.map((player, i) => (
      <StyledPlayer key={i}>
        {player.name}
        <StyledUnpopularButton onClick={() => onDeletePlayer(i)}>
          x
        </StyledUnpopularButton>
      </StyledPlayer>
    ))
  }

  render() {
    const { onAddPlayer } = this.props
    return (
      <StyledStartScreen>
        <h1>Welcome!</h1>
        {this.renderPlayers()}
        <PlayerInput onSubmit={onAddPlayer} />
        {this.renderWarningOrButton()}
      </StyledStartScreen>
    )
  }
}
