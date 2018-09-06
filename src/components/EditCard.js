import React, { Component } from 'react'
import PointButtonBar from './PointButtonBar'
import PlayerHeader from './PlayerHeader'
import styled from 'styled-components'

const StyledCard = styled.section`
  border-radius: 10px;
  margin-top: 10px;
  background-color: #efefef;
  margin-bottom: 20px;
`

export default class EditCard extends Component {
  render() {
    const { title, score, onUpdateScore } = this.props

    return (
      <StyledCard>
        <PlayerHeader title={title} score={score} />
        <PointButtonBar onClick={onUpdateScore} />
      </StyledCard>
    )
  }
}
