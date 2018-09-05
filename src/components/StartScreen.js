import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './Button'
import PlayerInput from './PlayerInput'

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

export default class StartScreen extends Component {
  renderWarningOrButton() {
    const { players, onStartGame, onDeleteAllPlayers } = this.props
    return players.length ? (
      <React.Fragment>
        <Button onClick={onStartGame}>Play!</Button>
        <StyledLittleButton onClick={() => onDeleteAllPlayers()}>
          Delete players
        </StyledLittleButton>
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
        <StyledLittleButton onClick={() => onDeletePlayer(i)}>
          x
        </StyledLittleButton>
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
