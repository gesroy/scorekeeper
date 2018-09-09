import React, { Component } from 'react'
import PointButtonBar from './PointButtonBar'
import PlayerHeader from './PlayerHeader'
import styled from 'styled-components'

const StyledGameCard = styled.section`
  border-radius: 15px;
  margin-top: 10px;
  background-color: #efefef;
  margin-bottom: 15px;
  overflow: hidden;
`

export default class GameCard extends Component {
  render() {
    const { title, score, onUpdateScore } = this.props

    return (
      <StyledGameCard>
        <PlayerHeader title={title} score={score} />
        <PointButtonBar onClick={onUpdateScore} />
      </StyledGameCard>
    )
  }
}
