import React, { Component } from 'react'
import ScoreUpdater from './ScoreUpdater'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 2em;
  margin: 10px;
`

const StyledBoard = styled.section`
  border-radius: 10px;
  margin-top: 10px;
  background-color: #efefef;
  margin-bottom: 20px;
`

export default class ScoreBoard extends Component {
  render() {
    const { title, score, onUpdate } = this.props

    return (
      <StyledBoard>
        <StyledHeader>
          <span>{title}</span>
          <span>{score}</span>
        </StyledHeader>
        <ScoreUpdater onClick={onUpdate} />
      </StyledBoard>
    )
  }
}
