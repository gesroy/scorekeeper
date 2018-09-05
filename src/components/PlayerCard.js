import React, { Component } from 'react'
import PointButtonBar from './PointButtonBar'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 2em;
  margin: 10px;
`

const StyledCard = styled.section`
  border-radius: 10px;
  margin-top: 10px;
  background-color: #efefef;
  margin-bottom: 20px;
`

export default class PlayerCard extends Component {
  render() {
    const { title, score, onUpdate } = this.props

    return (
      <StyledCard>
        <StyledHeader>
          <span>{title}</span>
          <span>{score}</span>
        </StyledHeader>
        <PointButtonBar onClick={onUpdate} />
      </StyledCard>
    )
  }
}
