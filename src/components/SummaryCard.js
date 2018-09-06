import React, { Component } from 'react'
import PlayerHeader from './PlayerHeader'
import RoundsBar from './RoundsBar'
import styled from 'styled-components'

const StyledSummaryCard = styled.div`
  margin-bottom: 15 px;
  width: 300px;
  margin: 10px;
`

export default class SummaryCard extends Component {
  render() {
    const { title, score, scores } = this.props
    return (
      <StyledSummaryCard>
        <PlayerHeader title={title} score={score} />
        <RoundsBar rounds={scores} />
      </StyledSummaryCard>
    )
  }
}
